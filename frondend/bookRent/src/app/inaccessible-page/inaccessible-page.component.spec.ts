import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InaccessiblePageComponent } from './inaccessible-page.component';

describe('InaccessiblePageComponent', () => {
  let component: InaccessiblePageComponent;
  let fixture: ComponentFixture<InaccessiblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InaccessiblePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InaccessiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
