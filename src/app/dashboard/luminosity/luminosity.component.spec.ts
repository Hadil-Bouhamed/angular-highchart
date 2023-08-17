import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminosityComponent } from './luminosity.component';

describe('LuminosityComponent', () => {
  let component: LuminosityComponent;
  let fixture: ComponentFixture<LuminosityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuminosityComponent]
    });
    fixture = TestBed.createComponent(LuminosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
