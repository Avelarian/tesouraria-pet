import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaldoPessoalService {

  baseUrl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  getAllHistorical(): Observable<any>{
    return this.http.get(this.baseUrl + '/historicoPetianos', {headers: this.httpHeaders});
  }
}
