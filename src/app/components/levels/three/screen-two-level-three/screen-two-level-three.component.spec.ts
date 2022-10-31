import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelThreeComponent } from './screen-two-level-three.component';

describe('ScreenTwoLevelThreeComponent', () => {
  let component: ScreenTwoLevelThreeComponent;
  let fixture: ComponentFixture<ScreenTwoLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
