import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getTokenExpirationDate(token: string): Date | undefined {
    try {
      const decodedToken: any = jwt_decode(token);

      if (decodedToken.exp && typeof decodedToken.exp === 'number') return new Date(decodedToken.exp * 1000);

    } catch (error) {
      console.error('Error al decodificar el token', error);
    }
    return;
  }

  private isTokenExpired(token: string): boolean {
    if (!token) return true;

    const expirationDate = this.getTokenExpirationDate(token);

    return expirationDate && expirationDate < new Date() || true;
  }
  constructor(private cookieService: CookieService) { }

  isLoggedIn(): boolean {

    const token = this.cookieService.get('ACCESS_TOKEN');

    return !!token && this.isTokenExpired(token);

  }

  public logout() {
    this.cookieService.delete('ACCESS_TOKEN');
  }

}
