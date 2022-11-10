import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwoLevelSixComponent } from './screen-two-level-six.component';

describe('ScreenTwoLevelSixComponent', () => {
  let component: ScreenTwoLevelSixComponent;
  let fixture: ComponentFixture<ScreenTwoLevelSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTwoLevelSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTwoLevelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
