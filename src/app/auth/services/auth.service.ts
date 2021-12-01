import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<AuthResponse> {
    const url = `${this.baseUrl}/auth`;
    const body = {
      email,
      password,
    };

    return this.http.post<AuthResponse>(url, body);
  }
}
