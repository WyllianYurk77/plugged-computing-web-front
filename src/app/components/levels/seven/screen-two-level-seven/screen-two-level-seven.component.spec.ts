import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelSevenComponent } from './screen-two-level-seven.component';

describe('ScreenTwoLevelSevenComponent', () => {
  let component: ScreenTwoLevelSevenComponent;
  let fixture: ComponentFixture<ScreenTwoLevelSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
