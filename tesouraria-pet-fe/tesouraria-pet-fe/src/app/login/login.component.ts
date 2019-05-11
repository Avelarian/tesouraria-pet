import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: null,
    password: null
  };
  loginFail = false;
  msgLogin = null;

  constructor(private loginService: LoginService, private router: Router) { }

  loginUser() {
    this.loginService.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token),
        localStorage.setItem('userName', this.user.username)
        this.router.navigate(['']);
      },
      err => {
        this.msgLogin = "Usuário e/ ou senha incorretos!",
        this.loginFail = true,
        this.user = {username: null, password: null}
      }
    )
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.loginFail = false;
    localStorage.removeItem('token')
    if(localStorage.getItem('msg')) {
      this.msgLogin = "Sessão expirada!";
      this.loginFail = true;
    }
    localStorage.removeItem('msg');
  }

}
