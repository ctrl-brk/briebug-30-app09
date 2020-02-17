import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_NAME = '30x30_access_token';

  public get loggedIn(): boolean {
    return this.token !== null;
  }

  public set token(value: string) {
    localStorage.setItem(this.TOKEN_NAME, value);
  }
  public get token(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<Object> {
    return this._http.post('https://mdv-auth-json-server.herokuapp.com/auth/login', {email, password});
  }

  public logout() {
    localStorage.removeItem(this.TOKEN_NAME);
  }
}
