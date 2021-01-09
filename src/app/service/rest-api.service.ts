import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimeLine } from './models/timeline.model';

export interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  api: string = "https://jsonplaceholder.typicode.com/users";
  TIMELINE_API = "https://covid19.th-stat.com/api/open/timeline";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api)
  }

  getTimeLine(): Observable<TimeLine> {
    return this.http.get<TimeLine>(this.TIMELINE_API)
  }
}