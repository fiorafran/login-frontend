import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent {
  sections = ['reportes', 'mensajes', 'administracion', 'ayuda']
}
