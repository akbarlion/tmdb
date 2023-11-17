import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdayComponent } from './airday.component';

describe('AirdayComponent', () => {
  let component: AirdayComponent;
  let fixture: ComponentFixture<AirdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirdayComponent]
    });
    fixture = TestBed.createComponent(AirdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
