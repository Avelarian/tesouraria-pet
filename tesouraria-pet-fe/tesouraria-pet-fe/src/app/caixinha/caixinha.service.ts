import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaixinhaService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCashierValue() {
    return this.http.get<any>(this.baseUrl + '/cashier');
  }

  getCashierDate() {
    return this.http.get<any>(this.baseUrl + '/cashier/latest');
  }
}
