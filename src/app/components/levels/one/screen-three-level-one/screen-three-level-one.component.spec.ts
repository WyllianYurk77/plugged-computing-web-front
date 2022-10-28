import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelOneComponent } from './screen-three-level-one.component';

describe('ScreenThreeComponent', () => {
  let component: ScreenThreeLevelOneComponent;
  let fixture: ComponentFixture<ScreenThreeLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
