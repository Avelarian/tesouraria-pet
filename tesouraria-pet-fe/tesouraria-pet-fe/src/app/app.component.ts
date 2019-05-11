import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tesouraria-pet-fe';
  login = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if(this.router.url === '/login') {
      this.login = false;
    } else {
      this.login = true;
    }
  }
}
