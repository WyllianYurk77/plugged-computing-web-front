import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelFiveComponent } from './screen-two-level-five.component';

describe('ScreenTwoLevelFiveComponent', () => {
  let component: ScreenTwoLevelFiveComponent;
  let fixture: ComponentFixture<ScreenTwoLevelFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
