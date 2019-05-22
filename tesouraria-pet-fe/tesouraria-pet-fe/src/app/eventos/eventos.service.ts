import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private id = null;

  getAllEvents() {
    return this.http.get<any>(this.baseUrl + '/eventos/');
  }
}
