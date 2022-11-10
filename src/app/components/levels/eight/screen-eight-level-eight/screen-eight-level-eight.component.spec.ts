import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEightLevelEightComponent } from './screen-eight-level-eight.component';

describe('ScreenEightLevelEightComponent', () => {
  let component: ScreenEightLevelEightComponent;
  let fixture: ComponentFixture<ScreenEightLevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenEightLevelEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenEightLevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
