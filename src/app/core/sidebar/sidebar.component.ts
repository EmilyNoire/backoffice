import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from "../table/table.component";


@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [
      MatSidenavModule, 
      MatListModule, 
      TableComponent]
})

export class SidebarComponent {
  sidebarItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Array of sidebar items
  highlightedItem: string | null = null;

  highlightItem(item: string): void {
    this.highlightedItem = item;
  }

  removeHighlight(item: string): void {
    this.highlightedItem = null;
  }
}
