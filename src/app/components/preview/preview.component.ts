import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Colors } from 'src/app/models/colors.model';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  private stylesSubscription: Subscription;
  color: Colors = {
    headboardText: '#000000',
    headboardBg: '#ffffff',
    incomingBubble: '#171924',
    incomingText: '#ffffff',
    outgoingBubble: '#c6df61',
    outgoingText: '#171924',
    background: '#e1e3e7',
  };
  font: string = ''
  fontSize: string = ''

  constructor(private stylesService: StylesService) {
    this.stylesSubscription = this.stylesService.stylesChanged.subscribe(styles => {
      this.color = styles.color
      this.font = styles.font
      this.fontSize = styles.fontSize
    })
  }

  getBubbleStyles = (bubbleTo: string) => {
    if (bubbleTo === 'person') return {
      "background-color": this.color.outgoingBubble,
      color: this.color.outgoingText,
      "font-family": this.font,
      "font-size": this.fontSize
    };

    if (bubbleTo === 'bot') return {
      "background-color": this.color.incomingBubble,
      color: this.color.incomingText,
      "font-family": this.font,
      "font-size": this.fontSize
    };

    return {};
  }

  chatbotMessages = [
    `¡Hola! Hey Now es una 
    empresa que ofrece 
    soluciones basadas en 
    inteligencia artificial para 
    interactuar con tus clientes 
    en tiempo real`,
    `Entendemos texto, audio e 
    imagen y tenemos presencia en más de 14 
    países`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.`
  ]

  ngOnDestroy() {
    this.stylesSubscription.unsubscribe();
  }
}
