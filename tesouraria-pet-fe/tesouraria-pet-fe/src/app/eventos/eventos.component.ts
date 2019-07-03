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
  private event = {};
  private historical = [];
  private valueSelected = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private eventosService: EventosService,
              private toastr: ToastrService) { }

  getEvent(id) {
    this.eventosService.getTheEventHistorical(id)
      .subscribe(
        res => {
          console.log(res);
          this.historical = res;
          this.event = res.event;
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
    this.eventosService.getTheEvent(id).subscribe(
      res => {
        this.event = res;
      }, res => {
        this.toastr.error('Nao foi possivel carregar os detalhes do evento!', 'Erro!');
      }
    );
  }

  ngOnInit() {
    this.eventosService.getAllEvents()
      .subscribe(
        resp => {
          this.events = resp;
          this.getEvent(resp[0]._id);
          this.valueSelected = resp[0]._id;
        },
        erro => {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      );
  }

}
