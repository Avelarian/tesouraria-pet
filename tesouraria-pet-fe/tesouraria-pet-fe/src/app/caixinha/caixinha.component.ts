import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {CaixinhaService} from './caixinha.service';
import {ToastrService} from 'ngx-toastr';
import {EventosService} from '../eventos/eventos.service';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css']
})
export class CaixinhaComponent implements OnInit {

  private historical = [];
  private hl = [];
  cashier = {};
  date;
  private users: any = [];
  private events: any = [];

  constructor(private loginService: LoginService,
              private router: Router,
              private caixinhaService: CaixinhaService,
              private toastr: ToastrService,
              private eventService: EventosService) { }

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
    this.caixinhaService.getCashierUserHistorical().subscribe(
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
      this.caixinhaService.getCashierUserHistorical().subscribe(
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
      this.caixinhaService.getCashierEventHistorical().subscribe(
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
