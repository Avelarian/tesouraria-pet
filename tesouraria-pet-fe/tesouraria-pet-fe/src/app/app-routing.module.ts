import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaldoPessoalComponent } from './saldo-pessoal/saldo-pessoal.component';
import { EventosComponent } from './eventos/eventos.component';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CofreComponent } from './cofre/cofre.component';
import { ContaBancariaComponent } from './conta-bancaria/conta-bancaria.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './Guard/login.guard';
import { RegisterComponent } from './register/register.component';
import {RoleGuard} from './Guard/role.guard';
import {UserOperationsComponent} from './user-operations/user-operations.component';
import {EventOperationsComponent} from './event-operations/event-operations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'saldoPessoal',
    component: SaldoPessoalComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'caixinha',
    component: CaixinhaComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cofre',
    component: CofreComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'contaBancaria',
    component: ContaBancariaComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'operations/user/:id',
    component: UserOperationsComponent,
    canActivate: [LoginGuard, RoleGuard]
  },
  {
    path: 'operations/event/:id',
    component: EventOperationsComponent,
    canActivate: [LoginGuard, RoleGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
