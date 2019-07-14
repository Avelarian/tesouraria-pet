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
import { LoginGuard } from './Guard/login.guard';
import { TokenInterceptorService } from './token-interceptor/token-interceptor.service';
import { RegisterComponent } from './register/register.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { JwtModule} from '@auth0/angular-jwt';
import { TreasurerMenuComponent } from './treasurer-menu/treasurer-menu.component';
import { UserOperationsComponent } from './user-operations/user-operations.component';
import { EventOperationsComponent } from './event-operations/event-operations.component';

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
    RegisterComponent,
    SideMenuComponent,
    TreasurerMenuComponent,
    UserOperationsComponent,
    EventOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
  ],
  providers: [LoginService, LoginGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
