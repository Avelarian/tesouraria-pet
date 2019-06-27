import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from './register.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: {};

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastr: ToastrService
  ) {
    this.user = {
      email: null,
      password: null
    };
  }

  registerUser() {
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
