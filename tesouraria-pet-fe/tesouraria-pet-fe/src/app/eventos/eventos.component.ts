import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {EventosService} from './eventos.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-saldo',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  private events: any = [];
  private event = {
    debt: 0
  };
  private users: any = [];
  private historical: any = [];
  private valueSelected = 0;

  constructor(private loginService: LoginService,
              private router: Router,
              private eventosService: EventosService,
              private toastr: ToastrService) { }

  getEvent(id) {
    if (id !== '0') {
      this.eventosService.getTheEvent(id).subscribe(
        res => {
          this.event = res;
        }, res => {
          this.toastr.error('Nao foi possivel carregar os detalhes do evento!', 'Erro!');
        }
      );
      this.eventosService.getAllUsers().subscribe(
        res => {
          this.users = res;
          this.eventosService.getTheEventHistorical(id)
            .subscribe(
              resp => {
                this.historical = resp;
                this.historical.forEach(h => {
                  this.users.forEach(u => {
                    if (u._id === h.user) {
                      h.user = u.full_name;
                    }
                  });
                });
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
        }, err => {
          this.toastr.error('Nao foi possivel carregar os responsaveis dos eventos!', 'Erro!');
        }
      );
    }
  }

  ngOnInit() {
    this.eventosService.getAllEvents()
      .subscribe(
        resp => {
          this.events = resp;
          this.valueSelected = 0;
        },
        erro => {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      );
  }

}
