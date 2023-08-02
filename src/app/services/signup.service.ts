import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:3000/api/auth/signup'

  constructor(private http: HttpClient, private router: Router) { }

  signup(fullName: string, email: string, password: string,): Observable<any> {
    const data = { fullName, email, password };
    return this.http.post(this.apiUrl, data).pipe(
      tap(response => {
        console.log('Inicio de sesion exitoso ', response)
        this.router.navigateByUrl('/home')
      }),
      catchError(error => {
        console.log('Erroe en inicio de sesion ', error)
        return error
      })
    )
  }
}
