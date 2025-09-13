import { Component } from '@angular/core';
// import { MenubarComponent } from './menubar.component';
// TODO: Update the path below if menubar.component.ts is in a different folder
// import { MenubarComponent } from './menubar/menubar.component';
// TODO: Update the path below to the correct location of menubar.component.ts
import { MenubarComponent } from './menubar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <header>
      <app-menubar></app-menubar>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
