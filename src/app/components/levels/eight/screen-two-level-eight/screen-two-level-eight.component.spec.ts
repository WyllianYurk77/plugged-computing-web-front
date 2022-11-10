import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelEightComponent } from './screen-two-level-eight.component';

describe('ScreenTwoLevelEightComponent', () => {
  let component: ScreenTwoLevelEightComponent;
  let fixture: ComponentFixture<ScreenTwoLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
