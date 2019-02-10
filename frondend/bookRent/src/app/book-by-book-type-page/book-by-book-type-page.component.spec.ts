import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByBookTypePageComponent } from './book-by-book-type-page.component';

describe('BookByBookTypePageComponent', () => {
  let component: BookByBookTypePageComponent;
  let fixture: ComponentFixture<BookByBookTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookByBookTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByBookTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
