import { APIService } from './../../shared/services/apiservice.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, of, tap } from 'rxjs';
import { SetProduct } from '../../shared/interfaces/product';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  
  isEditing: boolean = false;
  newProductForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    category: new FormControl('', Validators.required),
    employee: new FormControl('', Validators.required),
    reviews: new FormControl([])
  });

  constructor(
    private apiService: APIService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data) {
      this.isEditing = true;
      this.newProductForm.setValue({
        title: this.data.data.title || '',
        description: this.data.data.description || '',
        price: this.data.data.price || 0,
        category: this.data.data.category || '',
        employee: this.data.data.employee || '',
        reviews: this.data.reviews || []
      });
      
    }
  }

  onSubmit(): void {
    if (this.isValidFormValue(this.newProductForm.value)) {
      if (this.isEditing) {
        this.apiService.deleteProduct(this.data.id).subscribe();
      }   
        this.saveProduct(this.newProductForm.value);
    }
  }

  private isValidFormValue(formValue: any): formValue is SetProduct {
  return (
    formValue &&
    formValue.category &&
    formValue.title &&
    formValue.description &&
    formValue.price &&
    formValue.employee &&
    formValue.reviews
  );
}

  saveProduct(value: SetProduct): void {  
    this.apiService.setNewProduct(value).pipe(
      tap(() => {
        this.newProductForm.reset();
      }),
      catchError(() => {
        console.error('Error parsing HTTP response, probably content-type should be application/json');
        this.newProductForm.reset();
        return of(null);
      })).subscribe();
  }
}