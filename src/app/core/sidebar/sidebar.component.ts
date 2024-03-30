import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from "../table/table.component";
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [
      MatSidenavModule, 
      MatListModule, 
      TableComponent,
      RouterOutlet,
      RouterLink
    ]
})

export class SidebarComponent {
  sidebarItems: string[] = ['dashboard', 'newproduct', 'Item 3', 'Item 4'];
  highlightedItem: string | null = null;

  highlightItem(item: string): void {
    this.highlightedItem = item;
  }

  removeHighlight(item: string): void {
    this.highlightedItem = null;
  }
}
