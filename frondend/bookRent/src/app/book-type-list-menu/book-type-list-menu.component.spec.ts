import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTypeListMenuComponent } from './book-type-list-menu.component';

describe('BookTypeListMenuComponent', () => {
  let component: BookTypeListMenuComponent;
  let fixture: ComponentFixture<BookTypeListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTypeListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTypeListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
