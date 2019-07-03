import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  private headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  options = {headers: this.headers}

  registerUser(user) {
    return this.http.post<any>(this.baseUrl + 'user/signup/', user, this.options);
  }
}
