import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  options = [
    { label: "Robot", value: "Roboto" },
    { label: "Monospace", value: "monospace" },
    { label: "Arial", value: "Arial" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Sans serif", value: "sans-serif" },
  ]

}
