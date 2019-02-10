import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoLogoComponent } from './web-info-logo.component';

describe('WebInfoLogoComponent', () => {
  let component: WebInfoLogoComponent;
  let fixture: ComponentFixture<WebInfoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInfoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInfoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
