import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelSevenComponent } from './screen-one-level-seven.component';

describe('ScreenOneLevelSevenComponent', () => {
  let component: ScreenOneLevelSevenComponent;
  let fixture: ComponentFixture<ScreenOneLevelSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
