import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CofreService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSafeValue() {
    return this.http.get<any>(this.baseUrl + '/safe');
  }

  getSafeDate() {
    return this.http.get<any>(this.baseUrl + '/safe/latest');
  }

  getSafeUserHistorical() {
    return this.http.get<any>(this.baseUrl + '/userHistorical/safe/historical');
  }

  getSafeEventHistorical() {
    return this.http.get<any>(this.baseUrl + '/eventHistorical/safe/historical');
  }
}
