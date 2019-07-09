import { Component, OnInit } from '@angular/core';
import { SaldoPessoalService } from './saldo-pessoal.service';
import { LoginService } from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo-pessoal.component.html',
  styleUrls: ['./saldo-pessoal.component.css'],
  providers: [SaldoPessoalService]
})
export class SaldoPessoalComponent implements OnInit {

  historical: any = [{}];
  user: any = {};
  id: number;

  constructor(private saldoPessoalService: SaldoPessoalService,
              private loginService: LoginService,
              private router: Router, private toastr: ToastrService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.saldoPessoalService.getTheHistorico(this.id)
      .subscribe(
        res => {
          this.historical = res;
          this.saldoPessoalService.getTheUser(this.id).subscribe(
            resp => {
              this.user = resp;
              this.historical.forEach(h => {
                if (h.main_reason === 'Impressão Pessoal') {
                  this.user.printing++;
                }
                if (h.main_reason === 'Mensalidade') {
                  this.user.monthly_payment++;
                }
              });
            }, erro => {
              if (erro.status === 400 || erro.status === 401) {
                this.router.navigate(['/login']);
                this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
              } else {
                this.toastr.error('Verifique sua conexão!', 'Erro!');
              }
            }
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
