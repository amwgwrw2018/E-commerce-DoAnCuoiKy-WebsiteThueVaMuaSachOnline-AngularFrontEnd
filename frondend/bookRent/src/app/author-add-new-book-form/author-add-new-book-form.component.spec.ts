import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddNewBookFormComponent } from './author-add-new-book-form.component';

describe('AuthorAddNewBookFormComponent', () => {
  let component: AuthorAddNewBookFormComponent;
  let fixture: ComponentFixture<AuthorAddNewBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorAddNewBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAddNewBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
