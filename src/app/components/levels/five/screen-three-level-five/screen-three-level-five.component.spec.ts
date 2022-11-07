import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelFiveComponent } from './screen-three-level-five.component';

describe('ScreenThreeLevelFiveComponent', () => {
  let component: ScreenThreeLevelFiveComponent;
  let fixture: ComponentFixture<ScreenThreeLevelFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
