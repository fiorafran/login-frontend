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

  get stylesColors() {
    return this.stylesService.getColors();
  }
  get font() {
    return this.stylesService.getFont();
  }
  get fontSize() {
    return this.stylesService.getFontSize();
  }
  set font(size: string) {
    this.updateFont(size);
  }
  set fontSize(size: string) {
    this.updateFontSize(size);
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

  fontsOptions = [
    "Roboto",
    "monospace",
    "Arial",
    "Helvetica",
    "sans-serif"
  ]

  fontsSizes = [
    '11px',
    '12px',
    '13px',
    '14px',
    '15px',
    '16px'
  ]

  updateColors = (prop: string, value: string) => {
    this.stylesService.setColors({ [prop]: value });
  }
  updateFont = (newFont: string) => {
    this.stylesService.setFont(newFont);
  }
  updateFontSize = (size: string) => {
    this.stylesService.setFontSize(size);
  }

  closeSession = () => {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
