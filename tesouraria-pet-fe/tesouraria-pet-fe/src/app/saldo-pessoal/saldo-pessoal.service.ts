import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaldoPessoalService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  getTheHistorico(id) {
    return this.http.get<any>(this.baseUrl + '/userHistorical/user/' + id + '/');
  }

  getTheUser(id) {
    return this.http.get<any>(this.baseUrl + '/user/' + id);
  }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + '/user/');
  }
}
