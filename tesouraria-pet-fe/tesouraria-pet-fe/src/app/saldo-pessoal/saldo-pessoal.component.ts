import { Component, OnInit } from '@angular/core';
import { SaldoPessoalService } from './saldo-pessoal.service';
import { LoginService } from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo-pessoal.component.html',
  styleUrls: ['./saldo-pessoal.component.css'],
  providers: [SaldoPessoalService]
})
export class SaldoPessoalComponent implements OnInit {

  historical: any = [{}];
  loggedUser: any = {};
  users: any = [{}];
  user: any = {};

  constructor(private saldoPessoalService: SaldoPessoalService,
              private loginService: LoginService,
              private router: Router, private toastr: ToastrService,
              private route: ActivatedRoute,
              private jwt: JwtHelperService) {}

  ngOnInit() {
    this.loggedUser = this.jwt.decodeToken(localStorage.getItem('token'));
    this.user = this.loggedUser;
    this.saldoPessoalService.getTheHistorico(this.loggedUser._id)
      .subscribe(
        res => {
          this.historical = res;
          this.user.printing = 0;
          this.user.monthly_payment = 0;
          this.historical.forEach(h => {
            if (h.main_reason === 'Impressão Pessoal') {
              this.user.printing++;
            }
            if (h.main_reason === 'Mensalidade') {
              this.user.monthly_payment++;
            }
          });
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
    this.saldoPessoalService.getAllUsers().subscribe(
      res => {
        this.users = res;
      }, err => {
        if (err.status === 400 || err.status === 401) {
          this.router.navigate(['/login']);
          this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
        } else {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      }
    );
  }

  getUserHistorical(id) {
    this.saldoPessoalService.getTheHistorico(id)
      .subscribe(
        res => {
          this.historical = res;
          this.user.printing = 0;
          this.user.monthly_payment = 0;
          this.saldoPessoalService.getTheUser(id).subscribe(
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
            }, err => {
              if (err.status === 400 || err.status === 401) {
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
