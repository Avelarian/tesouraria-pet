import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService,
              private jwt: JwtHelperService,
              private toastr: ToastrService) {}

  canActivate(): boolean {
    if (!this.jwt.isTokenExpired(localStorage.getItem('token'))) {
      return true;
    } else {
      this.toastr.warning('Refaca o login para continuar utilizando' +
        ' a Tesouraria do PET', 'Sessao expirada!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
