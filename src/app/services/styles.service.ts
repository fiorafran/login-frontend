import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  private styles: any = {
    color: {
      headboardText: '#ffffff',
      headboardBg: '#ffffff',
      incomingBubble: '#ffffff',
      incomingText: '#ffffff',
      outgoingBubble: '#ffffff',
      outgoingText: '#ffffff',
      background: '#ffffff',
    },
    font: 'Roboto',
    fontSize: '16px'
  };

  getColors = () => {
    return this.styles.color;
  }

  getFont = () => {
    return this.styles.font;
  }
  getFontSize = () => {
    return this.styles.fontSize;
  }

  setColors(newStyles: any) {
    this.styles.color = { ...this.styles.color, ...newStyles }
  }
  setFont(newFont: any) {
    this.styles.font = newFont
  }
  setFontSize(size: any) {
    this.styles.fontSize = size 
  }

}
