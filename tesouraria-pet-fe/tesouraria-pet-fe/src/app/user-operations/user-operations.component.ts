import { Component, OnInit } from '@angular/core';
import {SaldoPessoalService} from '../saldo-pessoal/saldo-pessoal.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-operations',
  templateUrl: './user-operations.component.html',
  styleUrls: ['./user-operations.component.css']
})
export class UserOperationsComponent implements OnInit {

  users: any = [];
  historic: any = {};

  constructor(private userService: SaldoPessoalService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      }, err => {
        if (err.status === 400 || err.status === 401) {
          this.router.navigate(['/login']);
          this.toastr.error('Refaça a autenticação para continuar!', 'Sessão expirada!');
        } else {
          this.toastr.error('Verifique sua conexão!', 'Erro!');
        }
      }
    );
  }

  submit() {
    console.log(this.historic);
  }

}
