import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Review } from '../../../shared/interfaces/reviews';

@Component({
  selector: 'app-modal-review-row',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './modal-review-row.component.html',
  styleUrl: './modal-review-row.component.scss'
})
export class ModalReviewRowComponent {
  @Input() reviewItem: Review = {} as Review;
  @Output() editReview = new EventEmitter<Review>();
  @Output() deleteReview = new EventEmitter<number>();
  editing: boolean = false;
  editedText: string = '';

  constructor() { }

  startEditing() {
    this.editing = true;
    this.editedText = this.reviewItem.text;
  }

  saveEdit() {
    this.editing = false;
    this.editReview.emit({key: this.reviewItem.key, text: this.editedText});
  }

  deleteRow() {
    this.deleteReview.emit(this.reviewItem.key);
  }
}
