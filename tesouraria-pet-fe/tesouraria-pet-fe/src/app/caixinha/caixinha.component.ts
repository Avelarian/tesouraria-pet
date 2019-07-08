import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {CaixinhaService} from './caixinha.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css']
})
export class CaixinhaComponent implements OnInit {

  private historical = [];
  cashier = {};
  date;

  constructor(private loginService: LoginService,
              private router: Router,
              private caixinhaService: CaixinhaService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.caixinhaService.getCashierValue()
      .subscribe(
        resp => {
          this.cashier = resp[0];
          console.log(resp);
        },
        erro => {
          if (erro.status === 400 || erro.status === 401) {
            this.router.navigate(['/login']);
            this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
          } else {
            this.toastr.error('Verifique sua conexão!', 'Erro!');
          }
        }
      );
    this.caixinhaService.getCashierDate().subscribe(
      res => this.date = res.date,
      err => {
        if (err.status === 400 || err.status === 401) {
          this.router.navigate(['/login']);
          this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
        } else {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      }
    );
  }

}
