import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelFiveComponent } from './screen-one-level-five.component';

describe('ScreenOneLevelFiveComponent', () => {
  let component: ScreenOneLevelFiveComponent;
  let fixture: ComponentFixture<ScreenOneLevelFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
