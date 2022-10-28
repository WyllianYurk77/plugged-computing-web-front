import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneLevelOneComponent } from './screen-one-level-one.component';

describe('ScreenOneComponent', () => {
  let component: ScreenOneLevelOneComponent;
  let fixture: ComponentFixture<ScreenOneLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenOneLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenOneLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
