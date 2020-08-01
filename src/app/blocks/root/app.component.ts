import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../core/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,OnInit {
  user: Observable<User>;
  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router){
  }
  ngOnInit(): void {
    this.user = this.authService.user;
    this.userSubscription = this.authService
    .findMe()
    .subscribe(user =>
      {this.user = user;
      });

  }

  ngOnDestroy(): void {
    if (this.userSubscription)
    {
      this.userSubscription.unsubscribe();
    }
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/']);

  }
}
// initially angular runs in a webpack dev-server in memory.
