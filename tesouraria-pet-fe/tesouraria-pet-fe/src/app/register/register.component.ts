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

  user =  {};

  constructor(private router: Router, private registerService: RegisterService, private toastr: ToastrService) { }

  loginUser() {
    this.router.navigate(['/login']);
  }

  registerUser() {
    this.registerService.registerUser(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
          this.toastr.success('Aguarde aprovação do tesoureiro para realizar o login!', 'Registro criado com sucesso!')
        }, err => {
          this.toastr.error('Verifique sua conexão!', 'Autenticação falhou!');
          this.user = {username: null, password: null};
        }
      );
  }

  ngOnInit() {
  }

}
