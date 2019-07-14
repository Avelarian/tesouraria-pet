import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../login/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user: any = {};
  constructor(private router: Router,
              private jwt: JwtHelperService,
              private toastr: ToastrService) {
  }

  canActivate(): boolean {
    this.user = this.jwt.decodeToken(localStorage.getItem('token'));
    if (this.user.role === 'Tesouraria') {
      return true;
    } else {
      this.toastr.warning('Essa secao nao e permitida para voce.', 'Acesso bloqueado!');
      this.router.navigate(['/saldoPessoal']);
      return false;
    }
  }
}
