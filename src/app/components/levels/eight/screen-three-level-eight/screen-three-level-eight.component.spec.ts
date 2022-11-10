import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelEightComponent } from './screen-three-level-eight.component';

describe('ScreenThreeLevelEightComponent', () => {
  let component: ScreenThreeLevelEightComponent;
  let fixture: ComponentFixture<ScreenThreeLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
