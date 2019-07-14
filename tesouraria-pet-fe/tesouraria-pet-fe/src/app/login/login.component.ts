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

  user: {};
  id: number;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.user = {
      email: null,
      password: null
    };
    this.id = null;
  }

  loginUser() {
    this.loginService.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['saldoPessoal']);
        this.toastr.success('Bem vindo ao sistema do PET Elétrica!', 'Olá, ' + res.user.full_name);
      },
      err => {
        this.toastr.error('Usuário ou senha incorretos!', 'Autenticação falhou!');
      }
    );
  }

  ngOnInit() {
    localStorage.removeItem('token');
  }

}
