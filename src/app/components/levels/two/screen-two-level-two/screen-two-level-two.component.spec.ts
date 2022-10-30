import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelTwoComponent } from './screen-two-level-two.component';

describe('ScreenTwoLevelTwoComponent', () => {
  let component: ScreenTwoLevelTwoComponent;
  let fixture: ComponentFixture<ScreenTwoLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
