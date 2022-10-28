import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelOneComponent } from './screen-four-level-one.component';

describe('ScreenFourComponent', () => {
  let component: ScreenFourLevelOneComponent;
  let fixture: ComponentFixture<ScreenFourLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
