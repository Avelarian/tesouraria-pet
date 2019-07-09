import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EventosService} from '../eventos/eventos.service';
import {ContaBancariaService} from './conta-bancaria.service';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.component.html',
  styleUrls: ['./conta-bancaria.component.css']
})
export class ContaBancariaComponent implements OnInit {

  private historical = [];
  private hl = [];
  bank = {};
  date;
  private users: any = [];
  private events: any = [];

  constructor(private loginService: LoginService,
              private router: Router,
              private bancoService: ContaBancariaService,
              private toastr: ToastrService,
              private eventService: EventosService) { }

  ngOnInit() {
    this.bancoService.getBankAccountValue()
      .subscribe(
        resp => {
          this.bank = resp[0];
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
    this.bancoService.getBankAccountDate().subscribe(
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
    this.bancoService.getBankAccountUserHistorical().subscribe(
      res => {
        this.hl = res;
        this.eventService.getAllUsers().subscribe(
          resp => {
            this.users = resp;
            this.users.forEach(u => {
              this.hl.forEach(h => {
                if (h.user === u._id) {
                  h.user = u.full_name;
                }
              });
            });
            this.historical = this.hl;
          }, err => {
            if (err.status === 400 || err.status === 401) {
              this.router.navigate(['/login']);
              this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
            } else {
              this.toastr.error('Verifique sua conexão!', 'Erro!');
            }
          }
        );
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

  getHistorical(id) {
    this.historical = [];
    if (id === 1) {
      this.bancoService.getBankAccountUserHistorical().subscribe(
        res => {
          this.hl = res;
          this.eventService.getAllUsers().subscribe(
            resp => {
              this.users = resp;
              this.users.forEach(u => {
                this.hl.forEach(h => {
                  if (h.user === u._id) {
                    h.user = u.full_name;
                  }
                });
              });
              this.historical = this.hl;
            }, err => {
              if (err.status === 400 || err.status === 401) {
                this.router.navigate(['/login']);
                this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
              } else {
                this.toastr.error('Verifique sua conexão!', 'Erro!');
              }
            }
          );
        }, err => {
          if (err.status === 400 || err.status === 401) {
            this.router.navigate(['/login']);
            this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
          } else {
            this.toastr.error('Verifique sua conexão!', 'Erro!');
          }
        }
      );
    } else if (id === 2) {
      this.bancoService.getBankAccountEventHistorical().subscribe(
        res => {
          this.hl = res;
          this.eventService.getAllEvents().subscribe(
            resp => {
              this.events = resp;
              this.hl.forEach(h => {
                this.users.forEach(u => {
                  if (u._id === h.user) {
                    h.user = u.full_name;
                  }
                });
                this.events.forEach(e => {
                  if (e._id === h.event) {
                    h.event = e.name;
                  }
                });
              });
              this.historical = this.hl;
            }, err => {
              if (err.status === 400 || err.status === 401) {
                this.router.navigate(['/login']);
                this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
              } else {
                this.toastr.error('Verifique sua conexão!', 'Erro!');
              }
            }
          );
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
  }

}
