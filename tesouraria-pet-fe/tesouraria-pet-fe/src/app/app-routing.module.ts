import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaldoPessoalComponent } from './saldo-pessoal/saldo-pessoal.component';
import { EventosComponent } from './eventos/eventos.component';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CofreComponent } from './cofre/cofre.component';
import { ContaBancariaComponent } from './conta-bancaria/conta-bancaria.component';

const routes: Routes = [
  {
    path: 'saldoPessoal',
    component: SaldoPessoalComponent
  },
  {
    path: '',
    component: SaldoPessoalComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'caixinha',
    component: CaixinhaComponent
  },
  {
    path: 'cofre',
    component: CofreComponent
  },
  {
    path: 'contaBancaria',
    component: ContaBancariaComponent
  },
]

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
