import { Component, OnInit } from '@angular/core';
import { SaldoPessoalService } from './saldo-pessoal.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo-pessoal.component.html',
  styleUrls: ['./saldo-pessoal.component.css'],
  providers: [SaldoPessoalService]
})
export class SaldoPessoalComponent implements OnInit {

  historical = [{}]

  constructor(private saldoPessoalService: SaldoPessoalService, private loginService: LoginService, private router: Router, private toastr: ToastrService) {}
  
  ngOnInit() {
    this.loginService.getTheUser(1)
    .subscribe(
      resp => {
        this.router.navigate(['saldoPessoal', resp[0].id]),
          this.saldoPessoalService.getTheHistorico(resp[0].id)
          .subscribe(
            res => {
              this.historical = res;
            },
            err => this.toastr.error('Verifique sua conexão!', 'Erro!')
          );
      },
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
