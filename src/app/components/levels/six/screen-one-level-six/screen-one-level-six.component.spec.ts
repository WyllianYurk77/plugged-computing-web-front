import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelSixComponent } from './screen-one-level-six.component';

describe('ScreenOneLevelSixComponent', () => {
  let component: ScreenOneLevelSixComponent;
  let fixture: ComponentFixture<ScreenOneLevelSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
