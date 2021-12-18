import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullsDetailsComponent } from './pulls-details.component';

describe('PullsDetailsComponent', () => {
  let component: PullsDetailsComponent;
  let fixture: ComponentFixture<PullsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
