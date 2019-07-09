import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private id = null;

  getAllEvents() {
    return this.http.get<any>(this.baseUrl + 'event/');
  }

  getTheEvent(id) {
    return this.http.get<any>(this.baseUrl + 'event/' + id);
  }

  getTheEventHistorical(id) {
    return this.http.get<any>(this.baseUrl + 'eventHistorical/event/' + id + '/');
  }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + 'user/');
  }
}
