import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-heynow';

  constructor(private authService: AuthService, private router: Router) { }

  changeTile() {
    this.title = 'change title'
  }

  ngOnInit(): void {
    const isLoggedIn = this.authService.isLoggedIn()

    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
    }

  }

}
