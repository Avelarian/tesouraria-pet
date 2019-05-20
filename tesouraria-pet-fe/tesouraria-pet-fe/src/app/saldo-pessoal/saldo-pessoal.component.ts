import { Component, OnInit } from '@angular/core';
import { SaldoPessoalService } from './saldo-pessoal.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo-pessoal.component.html',
  styleUrls: ['./saldo-pessoal.component.css'],
  providers: [SaldoPessoalService]
})
export class SaldoPessoalComponent implements OnInit {

  historical = [{}]

  constructor(private saldoPessoalService:SaldoPessoalService, private loginService: LoginService, private router: Router, private toastr: ToastrService) {}

  getAllHistorical = () => {
    this.saldoPessoalService.getAllHistorical().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].from_place === 'PB') {
            data[i].from_place = 'Próprio Bolso';
          }
          if (data[i].from_place === 'CA') {
            data[i].from_place = 'Caixinha';
          }
          if (data[i].from_place === 'CO') {
            data[i].from_place = 'Cofre';
          }
          if (data[i].from_place === 'CB') {
            data[i].from_place = 'Conta Bancária';
          }
          if (data[i].to_place === 'PB') {
            data[i].to_place = 'Próprio Bolso';
          }
          if (data[i].to_place === 'CA') {
            data[i].to_place = 'Caixinha';
          }
          if (data[i].to_place === 'CO') {
            data[i].to_place = 'Cofre';
          }
          if (data[i].to_place === 'CB') {
            data[i].to_place = 'Conta Bancária';
          }
        }
        this.historical = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  
  ngOnInit() {
    this.loginService.tokenVerify()
    .subscribe(
      res => console.log('Token válido'),
      err => {
        this.router.navigate(['/login']);
        this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
      }
    )
    this.getAllHistorical();
  }

}
