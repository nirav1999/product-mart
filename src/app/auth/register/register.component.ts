import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatch ])
  });
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  passwordsMatch(control: FormControl): any{
    const password = control.root.get('password');
    return password && control.value !== password.value ?
    {
      passwordMatch: true
    } : null;
  }

  register(): void {

      if (!this.userForm.valid){
        return;
      }
      const user = this.userForm.getRawValue();
      this.authService.register(user).subscribe(s => this.router.navigate(['/']));
  }

  // tslint:disable-next-line:typedef
  get fullname() {
    return this.userForm.get('fullname');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.userForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.userForm.get('password');
  }

  // tslint:disable-next-line:typedef
  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }
}
