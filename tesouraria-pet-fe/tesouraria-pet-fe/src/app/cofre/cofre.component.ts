import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cofre',
  templateUrl: './cofre.component.html',
  styleUrls: ['./cofre.component.css']
})
export class CofreComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.tokenVerify()
    .subscribe(
      res => console.log("Token válido"),
      err => {
        localStorage.setItem('msg', 'Sessão expirada!')
        this.router.navigate(['/login']);
      }
    )
  }

}
