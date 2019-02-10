import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarousel1Component } from './book-carousel1.component';

describe('BookCarousel1Component', () => {
  let component: BookCarousel1Component;
  let fixture: ComponentFixture<BookCarousel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCarousel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
