import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-review',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './modal-review.component.html',
  styleUrl: './modal-review.component.scss'
})
export class ModalReviewComponent {
  newReviews = new FormGroup ({
    review: new FormControl('', Validators.required),
  });


  constructor(@Inject(MAT_DIALOG_DATA) public row: any) {}

  onSubmit() {
    const reviewControl = this.newReviews.get('review');
    if (reviewControl) {
      const reviewValue = reviewControl.value;
      const existingReviews = this.row.data.reviews || [];
      existingReviews.push(reviewValue);
      sessionStorage.setItem(this.row.data.id, JSON.stringify(existingReviews));
      console.log(`Recensione salvata per id: ${this.row.data.id}`);
    } else {
      console.error('Impossibile.');
    }
}

}