import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelOneComponent } from './screen-two-level-one.component';

describe('ScreenTwoComponent', () => {
  let component: ScreenTwoLevelOneComponent;
  let fixture: ComponentFixture<ScreenTwoLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
