import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaixinhaService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getTheHistorico() {
    return this.http.get<any>(this.baseUrl + '/caixinhaHistorico');
  }

  getTheHistoricoEventos() {
    return this.http.get<any>(this.baseUrl + '/caixinhaHistoricoEventos');
  }
}
