import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelTwoComponent } from './screen-three-level-two.component';

describe('ScreenThreeLevelTwoComponent', () => {
  let component: ScreenThreeLevelTwoComponent;
  let fixture: ComponentFixture<ScreenThreeLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
