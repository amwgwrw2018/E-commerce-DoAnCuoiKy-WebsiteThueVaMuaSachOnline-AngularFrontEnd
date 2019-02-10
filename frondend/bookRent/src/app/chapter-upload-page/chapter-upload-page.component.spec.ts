import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterUploadPageComponent } from './chapter-upload-page.component';

describe('ChapterUploadPageComponent', () => {
  let component: ChapterUploadPageComponent;
  let fixture: ComponentFixture<ChapterUploadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterUploadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
