import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelFourComponent } from './screen-four-level-four.component';

describe('ScreenFourLevelFourComponent', () => {
  let component: ScreenFourLevelFourComponent;
  let fixture: ComponentFixture<ScreenFourLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
