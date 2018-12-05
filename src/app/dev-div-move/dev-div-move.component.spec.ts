import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDivMoveComponent } from './dev-div-move.component';

describe('DevDivMoveComponent', () => {
  let component: DevDivMoveComponent;
  let fixture: ComponentFixture<DevDivMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDivMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDivMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
