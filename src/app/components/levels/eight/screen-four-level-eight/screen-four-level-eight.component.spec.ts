import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelEightComponent } from './screen-four-level-eight.component';

describe('ScreenFourLevelEightComponent', () => {
  let component: ScreenFourLevelEightComponent;
  let fixture: ComponentFixture<ScreenFourLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
