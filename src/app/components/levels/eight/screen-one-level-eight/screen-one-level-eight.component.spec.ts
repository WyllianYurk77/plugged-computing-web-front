import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelEightComponent } from './screen-one-level-eight.component';

describe('ScreenOneLevelEightComponent', () => {
  let component: ScreenOneLevelEightComponent;
  let fixture: ComponentFixture<ScreenOneLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
