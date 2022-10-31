import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelTwoComponent } from './screen-four-level-two.component';

describe('ScreenFourLevelTwoComponent', () => {
  let component: ScreenFourLevelTwoComponent;
  let fixture: ComponentFixture<ScreenFourLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
