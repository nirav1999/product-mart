
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  error: string;
  password: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.error = '';
    this.authService
    .login(this.email, this.password)
    .subscribe(s => this.router.navigate(['']), e => (this.error = e));
  }

}
