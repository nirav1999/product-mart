import { LogService } from './../log.service';
import { TokenStorageService } from './token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError, EMPTY, BehaviorSubject } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private   tokenStorage: TokenStorageService,
              private logService: LogService
              ) { }

  private user$ = new BehaviorSubject<User>(null);
  private apiUrl = '/api/auth/';

  // tslint:disable-next-line:typedef
  register(userToSave: any) {
    return this.httpClient.post<any>(`${this.apiUrl}register`, userToSave).pipe(
        switchMap(({user, token}) => {
            this.setUser(user);
            this.tokenStorage.setToken(token);
            console.log(`user registered successfully`, user);
            return of(user);
        }),
        catchError(e => {
          console.log(`server error occured`, e);
          return throwError('Registration failed please contact admin');
        })
    );
  }

  // tslint:disable-next-line:typedef
  get user() {
    return this.user$.asObservable();
  }

  // tslint:disable-next-line:typedef
  findMe() {
    const token = this.tokenStorage.getToken();
    console.log('findMe');
    if (!token){
      return EMPTY;
    }
    return this.httpClient
    .get<any>(`${this.apiUrl}findme`)
    .pipe(
      switchMap(({user}) => {
          this.setUser(user);
          console.log(`user found`, user);
          return of(user);
        }
      ),
      catchError(e => {
        return throwError('Your login details could not be verified. Please try again');
      })
    );
  }

  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    const loginCredentials = {email, password};
    console.log('login Credentials', loginCredentials);

    return this.httpClient
    .post<any>(`${this.apiUrl}login`, loginCredentials).pipe(
      switchMap(({user, token})  => {
          this.setUser(user);
          this.tokenStorage.setToken(token);
          console.log('user found', user);
          return of(user);
        }
      ),
      catchError(e => {
        this.logService.log('server Error Occurred', e);
        return throwError('Your login details could not be verified. Please try again');
      })
    );
  }

  private setUser(user) {
    this.user$.next(user);
  }

  logout(): void  {
    // remove user from subject
    // remove token from localstorage
    this.tokenStorage.removeToken();
    this.setUser(null);
    console.log('user logout successfully');
  }

}
