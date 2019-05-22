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

  constructor(private loginService: LoginService, private router: Router, private eventosService: EventosService, private toastr: ToastrService) { }

  teste(id) {
    console.log(id);
  }

  ngOnInit() {
    this.loginService.tokenVerify()
    .subscribe(
      res => {
        this.eventosService.getAllEvents()
          .subscribe(
            resp => {
              this.events = resp;
              console.log(resp);
            },
            erro => {
              this.toastr.error('Verifique sua conexão!', 'Erro!');
            }
          );
      },
      err => {
        localStorage.setItem('msg', 'Sessão expirada!')
        this.router.navigate(['/login']);
      }
    );
  }

}
