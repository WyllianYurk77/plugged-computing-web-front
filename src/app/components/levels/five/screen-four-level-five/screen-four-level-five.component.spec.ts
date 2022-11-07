import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelFiveComponent } from './screen-four-level-five.component';

describe('ScreenFourLevelFiveComponent', () => {
  let component: ScreenFourLevelFiveComponent;
  let fixture: ComponentFixture<ScreenFourLevelFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
