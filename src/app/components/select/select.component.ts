import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() selected: string = '';
  @Input() options: string[] = [];
  @Output() selectedChange = new EventEmitter<string>();

}
