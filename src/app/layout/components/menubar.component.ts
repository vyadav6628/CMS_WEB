import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  template: `
    <!-- Menubar content will go here -->
    <ng-content></ng-content>
  `,
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {}
