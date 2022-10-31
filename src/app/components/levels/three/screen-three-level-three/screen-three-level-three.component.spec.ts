import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelThreeComponent } from './screen-three-level-three.component';

describe('ScreenThreeLevelThreeComponent', () => {
  let component: ScreenThreeLevelThreeComponent;
  let fixture: ComponentFixture<ScreenThreeLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
