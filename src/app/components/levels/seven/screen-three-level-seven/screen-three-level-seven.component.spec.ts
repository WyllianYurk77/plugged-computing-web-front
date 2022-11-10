import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelSevenComponent } from './screen-three-level-seven.component';

describe('ScreenThreeLevelSevenComponent', () => {
  let component: ScreenThreeLevelSevenComponent;
  let fixture: ComponentFixture<ScreenThreeLevelSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
