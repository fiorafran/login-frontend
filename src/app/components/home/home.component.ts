import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router, private stylesService: StylesService) { }

  get styles() {
    return this.stylesService.getColors();
  }

  colors = [
    { label: 'Texto cabecera', prop: 'headboardText' },
    { label: 'Fondo cabecera', prop: 'headboardBg' },
    { label: 'Burbuja entrante', prop: 'incomingBubble' },
    { label: 'Texto entrante', prop: 'incomingText' },
    { label: 'Burbuja saliente', prop: 'outgoingBubble' },
    { label: 'Texto saliente', prop: 'outgoingText' },
    { label: 'Fondo', prop: 'background' },
  ];

  updateStyles = (prop: string, value: string) => {
    this.stylesService.setColors({ [prop]: value });
  }

  closeSession = () => {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
