import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSixLevelEightComponent } from './screen-six-level-eight.component';

describe('ScreenSixLevelEightComponent', () => {
  let component: ScreenSixLevelEightComponent;
  let fixture: ComponentFixture<ScreenSixLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSixLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSixLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
