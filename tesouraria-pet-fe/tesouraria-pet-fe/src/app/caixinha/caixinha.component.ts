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

  constructor(private loginService: LoginService, private router: Router, private caixinhaService: CaixinhaService, private toastr: ToastrService) { }

  loadInfo(arg) {
    if (arg === 2) {
      this.caixinhaService.getTheHistoricoEventos()
        .subscribe(
          resp => this.historical = resp,
          erro => {
            if (erro.status === 400 || erro.status === 401) {
              this.router.navigate(['/login']);
              this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
            } else {
              this.toastr.error('Verifique sua conexão!', 'Erro!');
            }
          }
        );
    } else if (arg === 1) {
      this.caixinhaService.getTheHistorico()
        .subscribe(
          resp => this.historical = resp,
          erro => {
            if (erro.status === 400 || erro.status === 401) {
              this.router.navigate(['/login']);
              this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
            } else {
              this.toastr.error('Verifique sua conexão!', 'Erro!');
            }
          }
        );
    }
  }

  ngOnInit() {
    this.caixinhaService.getTheHistorico()
      .subscribe(
        resp => this.historical = resp,
        erro => {
          if (erro.status === 400 || erro.status === 401) {
            this.router.navigate(['/login']);
            this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
          } else {
            this.toastr.error('Verifique sua conexão!', 'Erro!');
          }
        }
      );
  }

}
