import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelFourComponent } from './screen-three-level-four.component';

describe('ScreenThreeLevelFourComponent', () => {
  let component: ScreenThreeLevelFourComponent;
  let fixture: ComponentFixture<ScreenThreeLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
