import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bubbleX = {}
  bubbleY = {}
  bubble = {}
  private stylesSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private stylesService: StylesService, private changeDetectorRef: ChangeDetectorRef) {
    this.stylesSubscription = this.stylesService.stylesChanged.subscribe((styles) => {
      this.bubble = styles.bubble;
    });
  }

  ngOnDestroy() {
    this.stylesSubscription.unsubscribe();
  }

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
    "Courier New",
    "sans-serif",
    "Times New Roman",
    "Georgia",
    "Verdana"
  ]

  fontsSizes = [
    '11px',
    '12px',
    '13px',
    '14px',
    '15px',
    '16px'
  ]

  image = '/assets/arrow.png'
  imageActive = '/assets/arrowWhite.png'
  leftOrRight = 'right'
  topOrBottom = 'bottom'

  updateColors = (prop: string, value: string) => {
    this.stylesService.setColors({ [prop]: value });
  }
  updateFont = (newFont: string) => {
    this.stylesService.setFont(newFont);
  }
  updateFontSize = (size: string) => {
    this.stylesService.setFontSize(size);
  }
  updateBubble = (newStyles: object) => {
    this.stylesService.setBubble(newStyles);
  }

  closeSession = () => {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  setLeftOrRight = (value: string) => {
    this.leftOrRight = value
    if (value === 'left') this.bubbleX = { left: 0 }
    if (value === 'right') this.bubbleX = { right: 0 }
    this.updateBubble({ ...this.bubbleX, ...this.bubbleY });
  }
  setTopOrBottom = (value: string) => {
    this.topOrBottom = value
    if (value === 'top') this.bubbleY = { top: 0 }
    if (value === 'bottom') this.bubbleY = { bottom: 0 }
    this.updateBubble({ ...this.bubbleX, ...this.bubbleY });
  }
  getImage = (button: string) => {
    return (button === this.leftOrRight || button === this.topOrBottom) ? this.imageActive : this.image
  }

}
