import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaldoPessoalComponent } from './saldo-pessoal/saldo-pessoal.component';
import { AppRoutingModule } from './app-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CofreComponent } from './cofre/cofre.component';
import { ContaBancariaComponent } from './conta-bancaria/conta-bancaria.component';

@NgModule({
  declarations: [
    AppComponent,
    SaldoPessoalComponent,
    EventosComponent,
    CaixinhaComponent,
    CofreComponent,
    ContaBancariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
