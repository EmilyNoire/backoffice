import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ModalReviewRowComponent } from './modal-review-row/modal-review-row.component';
import { Review } from '../../shared/interfaces/reviews';

@Component({
  selector: 'app-modal-review',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, ReactiveFormsModule, ModalReviewRowComponent],
  templateUrl: './modal-review.component.html',
  styleUrl: './modal-review.component.scss'
})
export class ModalReviewComponent implements OnInit {
  newReviews = new FormGroup ({
    review: new FormControl('', Validators.required),
  });
  indexReview:Review[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public row: any,) {
  }

  ngOnInit(): void {
    if (this.row.data.reviews) {
      this.indexReview = this.row.data.reviews.map(
        (review: string, index: number) => ({ key: index, text: review })
        );
    }
  };

  onSubmit() {
    const newReviewValue = this.newReviews.get('review')!.value;
    if (newReviewValue) {
      this.indexReview.push(
        { 
          key: this.indexReview.length > 0 ? this.indexReview[this.indexReview.length - 1].key + 1 : 0, 
          text: newReviewValue 
        }
      );
      this.newReviews.reset();
    }
  };

  editReview(updatedText: Review) {  
    this.indexReview[updatedText.key].text = updatedText.text
  };

  deleteReview(key: number) {
    const index = this.indexReview.findIndex(review => review.key === key);
    if (index !== -1) {
      this.indexReview.splice(index, 1);
    };
  }

  //TODO: eliminazione del vecchio campo con l'id e le vecchie recensioni e salvataggio dei dati con la nuova recensione
  //TODO: dopo aver salvato i dati si deve chiudere da solo e il numero accanto a review deve aggiornarsi.

}