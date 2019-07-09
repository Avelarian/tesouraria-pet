import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EventosService} from '../eventos/eventos.service';
import {CofreService} from './cofre.service';

@Component({
  selector: 'app-cofre',
  templateUrl: './cofre.component.html',
  styleUrls: ['./cofre.component.css']
})
export class CofreComponent implements OnInit {

  private historical = [];
  private hl = [];
  safe = {};
  date;
  private users: any = [];
  private events: any = [];

  constructor(private loginService: LoginService,
              private router: Router,
              private cofreService: CofreService,
              private toastr: ToastrService,
              private eventService: EventosService) { }

  ngOnInit() {
    this.cofreService.getSafeValue()
      .subscribe(
        resp => {
          this.safe = resp[0];
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
    this.cofreService.getSafeDate().subscribe(
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
    this.cofreService.getSafeUserHistorical().subscribe(
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
      this.cofreService.getSafeUserHistorical().subscribe(
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
      this.cofreService.getSafeEventHistorical().subscribe(
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
