import { Component } from '@angular/core';
import { HeaderComponent } from "./core/header/header.component";
import { SidebarComponent } from "./core/sidebar/sidebar.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      HeaderComponent, 
      SidebarComponent
    ]
})
export class AppComponent {
  title = 'BackOffice App';
}
