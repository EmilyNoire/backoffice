import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReviewRowComponent } from './modal-review-row.component';

describe('ModalReviewRowComponent', () => {
  let component: ModalReviewRowComponent;
  let fixture: ComponentFixture<ModalReviewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReviewRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
