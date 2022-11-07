import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelFourComponent } from './screen-one-level-four.component';

describe('ScreenOneLevelFourComponent', () => {
  let component: ScreenOneLevelFourComponent;
  let fixture: ComponentFixture<ScreenOneLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
