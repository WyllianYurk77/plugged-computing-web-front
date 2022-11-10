import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSevenLevelEightComponent } from './screen-seven-level-eight.component';

describe('ScreenSevenLevelEightComponent', () => {
  let component: ScreenSevenLevelEightComponent;
  let fixture: ComponentFixture<ScreenSevenLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSevenLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSevenLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
