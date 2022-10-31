import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelThreeComponent } from './screen-four-level-three.component';

describe('ScreenFourLevelThreeComponent', () => {
  let component: ScreenFourLevelThreeComponent;
  let fixture: ComponentFixture<ScreenFourLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
