import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.css']
})
export class TitleSubtitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';

}
