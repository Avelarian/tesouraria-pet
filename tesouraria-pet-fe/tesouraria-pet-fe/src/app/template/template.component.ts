import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public user: any = {};

  constructor(private loginService: LoginService,
              private jwtHelper: JwtHelperService) {
    this.user = this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }
  logoutUser() {
    this.loginService.logoutUser();
  }
  ngOnInit() {
  }

}
