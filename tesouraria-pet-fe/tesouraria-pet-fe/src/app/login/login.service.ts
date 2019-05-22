import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  baseUrl = 'http://localhost:8000/';

  loginUser(user) {
    return this.httpClient.post<any>(this.baseUrl + 'api-token-auth/', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  tokenVerify() {
    return this.httpClient.post<any>(this.baseUrl + 'api-token-verify/', {'token': localStorage.getItem('token')});
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }

  getTheUser() {
    return this.httpClient.get<any>(this.baseUrl + 'petiano-id/');
  }
}
