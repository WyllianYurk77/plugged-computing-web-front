import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelThreeComponent } from './screen-one-level-three.component';

describe('ScreenOneLevelThreeComponent', () => {
  let component: ScreenOneLevelThreeComponent;
  let fixture: ComponentFixture<ScreenOneLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
