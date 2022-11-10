import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNineLevelEightComponent } from './screen-nine-level-eight.component';

describe('ScreenNineLevelEightComponent', () => {
  let component: ScreenNineLevelEightComponent;
  let fixture: ComponentFixture<ScreenNineLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNineLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
