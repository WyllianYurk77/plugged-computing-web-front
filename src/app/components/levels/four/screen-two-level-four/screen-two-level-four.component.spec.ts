import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelFourComponent } from './screen-two-level-four.component';

describe('ScreenTwoLevelFourComponent', () => {
  let component: ScreenTwoLevelFourComponent;
  let fixture: ComponentFixture<ScreenTwoLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
