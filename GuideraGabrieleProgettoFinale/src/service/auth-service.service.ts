import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {registerRequest} from "../model/registerRequest";
import {loginRequest} from "../model/loginRequest";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  tokenCreationTime: string;
  ttl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `http://localhost:8080/api/utente`;

  constructor(private http: HttpClient) { }

  login(loginRequest: loginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest);
  }

  register(registerRequest: registerRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, registerRequest);
  }
}
