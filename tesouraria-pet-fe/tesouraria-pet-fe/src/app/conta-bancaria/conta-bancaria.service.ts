import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBankAccountValue() {
    return this.http.get<any>(this.baseUrl + '/bankAccount');
  }

  getBankAccountDate() {
    return this.http.get<any>(this.baseUrl + '/bankAccount/latest');
  }

  getBankAccountUserHistorical() {
    return this.http.get<any>(this.baseUrl + '/userHistorical/bankAccount/historical');
  }

  getBankAccountEventHistorical() {
    return this.http.get<any>(this.baseUrl + '/eventHistorical/bankAccount/historical');
  }
}
