import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaldoPessoalService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private id = null;

  getTheHistorico() {
    this.route.params.subscribe(params => { this.id = params['id']; });
    return this.http.get<any>(this.baseUrl + '/historicoPetiano/' + this.id + '/');
  }
}
