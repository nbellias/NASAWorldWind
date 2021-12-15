import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallMapComponent } from './overall-map.component';

describe('OverallMapComponent', () => {
  let component: OverallMapComponent;
  let fixture: ComponentFixture<OverallMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
