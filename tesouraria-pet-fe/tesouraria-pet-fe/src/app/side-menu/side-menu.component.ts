import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  user: any = {};
  active: boolean;
  id;
  constructor(private jwtHelper: JwtHelperService,
              private router: Router,
              private route: ActivatedRoute) {
    this.user = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    this.route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    if (this.router.url === '/operations/event/' + this.id) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

}
