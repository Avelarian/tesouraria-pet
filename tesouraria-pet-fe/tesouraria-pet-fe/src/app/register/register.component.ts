import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from './register.service';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    dt_start_course: null,
    dt_finish_course: null,
    dt_entry_pet: null,
    dt_leave_pet: null,
    email: null,
    password: null
  };
  functions = [];

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastr: ToastrService
  ) {
    this.functions = [
      'Tesouraria',
      'Recursos Humanos',
      'Organizacao',
      'Divulgacao',
      'Informatica'
    ];
  }

  registerUser() {
    this.user.dt_start_course = moment(this.user.dt_start_course, 'DD/MM/YYYY').format('MM/DD/YYYY');
    this.user.dt_finish_course = moment(this.user.dt_finish_course, 'DD/MM/YYYY').format('MM/DD/YYYY');
    this.user.dt_entry_pet = moment(this.user.dt_entry_pet, 'DD/MM/YYYY').format('MM/DD/YYYY');
    this.user.dt_leave_pet = moment(this.user.dt_leave_pet, 'DD/MM/YYYY').format('MM/DD/YYYY');
    this.registerService.registerUser(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
          this.toastr.success('Aguarde aprovação do tesoureiro para realizar o login!', 'Registro criado com sucesso!')
        }, err => {
          this.toastr.error('Verifique sua conexão!', 'Autenticação falhou!');
        }
      );
  }

  ngOnInit() {
  }

}
