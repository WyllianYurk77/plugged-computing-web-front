import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourLevelSixComponent } from './screen-four-level-six.component';

describe('ScreenFourLevelSixComponent', () => {
  let component: ScreenFourLevelSixComponent;
  let fixture: ComponentFixture<ScreenFourLevelSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourLevelSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFourLevelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
