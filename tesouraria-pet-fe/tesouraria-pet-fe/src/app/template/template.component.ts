import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  username = localStorage.getItem('userName')

  logoutUser() {
    this.loginService.logoutUser();
  }

  ngOnInit() {
  }

}
