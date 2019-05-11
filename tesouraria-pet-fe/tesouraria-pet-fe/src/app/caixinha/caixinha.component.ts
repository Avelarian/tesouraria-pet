import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css']
})
export class CaixinhaComponent implements OnInit {

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
