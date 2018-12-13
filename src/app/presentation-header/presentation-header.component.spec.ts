import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationHeaderComponent } from './presentation-header.component';

describe('PresentationHeaderComponent', () => {
  let component: PresentationHeaderComponent;
  let fixture: ComponentFixture<PresentationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
