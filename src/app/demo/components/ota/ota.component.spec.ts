import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaComponent } from './ota.component';

describe('OtaComponent', () => {
  let component: OtaComponent;
  let fixture: ComponentFixture<OtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtaComponent]
    });
    fixture = TestBed.createComponent(OtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
