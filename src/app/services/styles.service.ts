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
    fontsOptions: [
      { label: "Robot", value: "Roboto" },
      { label: "Monospace", value: "monospace" },
      { label: "Arial", value: "Arial" },
      { label: "Helvetica", value: "Helvetica" },
      { label: "Sans serif", value: "sans-serif" }
    ],
    fontsSizes: [
      '10px',
      '12px',
      '13px',
      '14px',
      '15px',
      '16px'
    ]
  };

  getColors = () => {
    return this.styles.color;
  }

  getFonts = () => {
    return this.styles.fontsOptions;
  }
  getFontsSizes = () => {
    return this.styles.fontsSizes;
  }

  setColors(newStyles: any) {
    this.styles.color = { ...this.styles.color, ...newStyles }
  }
  setFonts(newStyles: any) {
    this.styles.fontsOptions = { ...this.styles.fontsOptions, ...newStyles }
  }
  setFontsSizes(newStyles: any) {
    this.styles.fontsSizes = { ...this.styles.fontsSizes, ...newStyles }
  }

}
