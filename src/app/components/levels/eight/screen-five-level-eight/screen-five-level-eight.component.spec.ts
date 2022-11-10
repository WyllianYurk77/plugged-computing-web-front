import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFiveLevelEightComponent } from './screen-five-level-eight.component';

describe('ScreenFiveLevelEightComponent', () => {
  let component: ScreenFiveLevelEightComponent;
  let fixture: ComponentFixture<ScreenFiveLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFiveLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
