import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  login(data: Login): Observable<Login> {
    return this.http.post<Login>(this.baseApiUrl + '/api/Login/Login', data);
  }


  GetLoggedStatus(): Observable<boolean>{
       return this.http.get<boolean>(this.baseApiUrl+'/api/Login/logged-status');
    }
}
