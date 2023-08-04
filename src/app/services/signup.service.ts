import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = `${environment.backend}/api/auth/signup`

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService, private authService: AuthService) { }

  signup(fullName: string, email: string, password: string,): Observable<LoginResponse> {
    const data = { fullName, email, password };
    return this.http.post<LoginResponse>(this.apiUrl, data).pipe(
      tap(({ token, message }) => {
        console.log({ message })
        const expirationDate = this.authService.getTokenExpirationDate(token)

        this.cookieService.set('ACCESS_TOKEN', token, {
          expires: expirationDate,
          secure: true,
          sameSite: 'Lax',
        })
        this.router.navigateByUrl('/home')
      }),
      catchError(error => {
        console.log('Error en inicio de sesion ')
        throw new Error(error.error.message)
      })
    )
  }
}
