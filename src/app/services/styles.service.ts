import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  private styles: any = {
    color: {
      headboardText: '#000000',
      headboardBg: '#ffffff',
      incomingBubble: '#171924',
      incomingText: '#ffffff',
      outgoingBubble: '#c6df61',
      outgoingText: '#171924',
      background: '#e1e3e7',
    },
    font: 'Roboto',
    fontSize: '16px',
    bubble: {}
  };

  stylesChanged = new Subject<any>();
  stylesChangedHome = new Subject<any>();

  updateStyles = () => {
    this.stylesChanged.next(this.styles);
  }

  getColors = () => {
    return this.styles.color;
  }
  getFont = () => {
    return this.styles.font;
  }
  getFontSize = () => {
    return this.styles.fontSize;
  }
  getBubble = () => {
    return this.styles.bubble;
  }

  setColors = (newStyles: object) => {
    this.styles.color = { ...this.styles.color, ...newStyles }
    this.updateStyles()
  }
  setFont = (newFont: string) => {
    this.styles.font = newFont
    this.updateStyles()
  }
  setFontSize = (size: string) => {
    this.styles.fontSize = size
    this.updateStyles()
  }
  setBubble = (newStyles: object) => {
    this.styles.bubble = newStyles
    this.updateStyles()
  }
}
