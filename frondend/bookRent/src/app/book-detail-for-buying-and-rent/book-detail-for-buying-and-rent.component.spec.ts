import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailForBuyingAndRentComponent } from './book-detail-for-buying-and-rent.component';

describe('BookDetailForBuyingAndRentComponent', () => {
  let component: BookDetailForBuyingAndRentComponent;
  let fixture: ComponentFixture<BookDetailForBuyingAndRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailForBuyingAndRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailForBuyingAndRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
