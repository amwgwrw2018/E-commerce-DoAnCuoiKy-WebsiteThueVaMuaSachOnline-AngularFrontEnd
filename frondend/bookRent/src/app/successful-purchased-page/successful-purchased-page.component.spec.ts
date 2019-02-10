import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPurchasedPageComponent } from './successful-purchased-page.component';

describe('SuccessfulPurchasedPageComponent', () => {
  let component: SuccessfulPurchasedPageComponent;
  let fixture: ComponentFixture<SuccessfulPurchasedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulPurchasedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulPurchasedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
