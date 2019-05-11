import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}
  result;

  canActivate() : boolean {
   if(this.loginService.loggedIn()) {
     return true;
   } else {
     this.router.navigate(['/login']);
     return false;
   }
  }
  
}
