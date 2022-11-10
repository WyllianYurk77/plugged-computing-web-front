import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThreeLevelSixComponent } from './screen-three-level-six.component';

describe('ScreenThreeLevelSixComponent', () => {
  let component: ScreenThreeLevelSixComponent;
  let fixture: ComponentFixture<ScreenThreeLevelSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThreeLevelSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThreeLevelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
