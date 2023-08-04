import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../models/login.model';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.backend}/api/auth/login`

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthService, private router: Router) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const data = { email, password };

    return this.http.post<LoginResponse>(this.apiUrl, data).pipe(
      tap(({ token }) => {
        console.log('Inicio de sesion exitoso ')

        const expirationDate = this.authService.getTokenExpirationDate(token)

        this.cookieService.set('ACCESS_TOKEN', token, {
          expires: expirationDate,
          secure: true,
          sameSite: 'Lax',
        })

        this.router.navigateByUrl('/home')

      }),
      catchError(error => {
        console.log('Error en inicio de sesion ', error)
        throw new Error(error.error.message)
      })
    );
  }
}




