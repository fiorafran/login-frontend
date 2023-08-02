import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input() color: string = '#ffffff';
  @Input() label: string = '';
  @Output() colorChange = new EventEmitter<string>();

  onChangeColor = (event: any) => {
    this.color = event.target.value;
    this.colorChange.emit(this.color);
  }

}
