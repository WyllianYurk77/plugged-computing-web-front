import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelTwoComponent } from './screen-one-level-two.component';

describe('ScreenOneComponent', () => {
  let component: ScreenOneLevelTwoComponent;
  let fixture: ComponentFixture<ScreenOneLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
