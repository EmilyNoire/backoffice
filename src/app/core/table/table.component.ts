import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/services/apiservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { Product } from '../../shared/interfaces/product';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatTooltipModule, MatIconModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['category', 'title', 'description', 'price', 'employee', 'reviews'];
  dataSource: Product[] = [];
  showReviewsColumn = false;
  selectedRow: any = null;

  constructor(private apiService: APIService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getStoreProducts().subscribe(data => {
      this.dataSource = data;
      console.log('loadData', this.dataSource)
    });
  }

  openModal(id: string, row: Product): void {
    console.log(row)
    const dialogRef = this.dialog.open(ModalReviewComponent, {
      width: '600px',
      data: {
        id: id,
        data: row }
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  onSelect(id: string, row: Product): void {
    this.selectedRow = row;
    this.showReviewsColumn = true;
    this.openModal(id, row);
  }

}