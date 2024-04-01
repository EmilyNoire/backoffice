import { APIProduct, Product } from './../../shared/interfaces/product';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/services/apiservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EMPTY, catchError, switchMap } from 'rxjs';
import { NewProductComponent } from '../new-product/new-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatTooltipModule, MatIconModule, CommonModule, MatButtonModule, MatCardModule, MatGridListModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'category', 'title', 'description', 'price', 'employee', 'reviews'];
  dataSource: Product[] = [];
  changeview: boolean = false;
  cardData: any = {} as APIProduct;
  

  constructor(private apiService: APIService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getStoreProducts().subscribe(data => {
      this.dataSource = data;
      this.cardData = data;
    });
  }

  newProduct(): void {
    this.dialog.open(NewProductComponent, {width: '600px'})
  }

  editReview(id: string, row: Product): void {
    this.dialog.open(ModalReviewComponent, {
      width: '600px',
      data: {
        id: id,
        data: row
       }
    });
  }

  editProduct(id: string, row: Product, reviews: string[]): void {
    this.dialog.open(NewProductComponent, {
      width: '600px',
      data: {
        id: id,
        data: row,
        reviews: reviews || []
      }
    });
  }

  deleteProduct(id: string):void {
    this.apiService.deleteProduct(id).pipe(
          switchMap(() => this.apiService.getStoreProducts()),
          catchError((error) => {
            console.error('Error deleting product:', error);
            return EMPTY;
          })
        ).subscribe((products) => {
          this.dataSource = products;
        });
  }

  changeView(): void {
    this.changeview = !this.changeview
  }

}