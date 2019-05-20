import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: null,
    password: null
  };
  id = null;
  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  loginUser() {
    this.loginService.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token),
        localStorage.setItem('userName', this.user.username),
        this.loginService.getTheUser()
          .subscribe(
            resp => {
              for (let i = 0; i < resp.length; i++) { // Tem como melhorar!!! Mudar >> colocar id dos petianos!!
                if (resp[i].username === this.user.username) {
                  this.router.navigate(['saldoPessoal', resp[i].id]),
                  this.toastr.success('Bem vindo ao sistema do PET Elétrica!', 'Olá, ' + this.user.username);
                }
              }
            },
            erro => {
              this.toastr.error('Verifique a conexão e tente novamente!', 'Autenticação falhou!');
              this.user = {username: null, password: null};
            }
          );
      },
      err => {
        this.toastr.error('Usuário ou senha incorretos!', 'Autenticação falhou!');
        this.user = {username: null, password: null};
      }
    );
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  }

}
