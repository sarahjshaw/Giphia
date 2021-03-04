import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeChallengeComponent } from './time-challenge.component';

describe('TimeChallengeComponent', () => {
  let component: TimeChallengeComponent;
  let fixture: ComponentFixture<TimeChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
