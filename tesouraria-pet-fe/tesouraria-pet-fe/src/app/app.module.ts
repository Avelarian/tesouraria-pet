import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SaldoPessoalComponent } from './saldo-pessoal/saldo-pessoal.component';
import { AppRoutingModule } from './app-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { CaixinhaComponent } from './caixinha/caixinha.component';
import { CofreComponent } from './cofre/cofre.component';
import { ContaBancariaComponent } from './conta-bancaria/conta-bancaria.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login.guard';
import { TokenInterceptorService } from './token-interceptor/token-interceptor.service';
import { RegisterComponent } from './register/register.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SaldoPessoalComponent,
    EventosComponent,
    CaixinhaComponent,
    CofreComponent,
    ContaBancariaComponent,
    LoginComponent,
    TemplateComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LoginService, LoginGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
