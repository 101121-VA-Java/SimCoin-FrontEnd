import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  constructor(private http: HttpClient) { }

  getUser(): Observable<User>{
    return this.http.get(`${environment.API_URL}/account`)
      .pipe(
        map(response => response as User)
      )
  }

}