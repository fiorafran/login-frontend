import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent {
  @Input() size: number = 60;

  getPadding(): string {
    if (this.size <= 10) return '0';
    if (this.size <= 15) return '3px';
    if (this.size <= 20) return '5px';
    return '10px';
  }

}
