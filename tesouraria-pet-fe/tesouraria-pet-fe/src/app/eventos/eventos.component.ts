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

  private events = [];
  private evento = {};
  private historical = [];
  private valueSelected = false;

  constructor(private loginService: LoginService, private router: Router, private eventosService: EventosService, private toastr: ToastrService) { }

  getEvent(id) {
    this.eventosService.getTheEventHistorical(id)
      .subscribe(
        res => {
          this.historical = res;
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

  ngOnInit() {
    this.eventosService.getAllEvents()
      .subscribe(
        resp => {
          this.events = resp;
          this.getEvent(resp[0].id);
          this.valueSelected = resp[0].id;
        },
        erro => {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      );
  }

}
