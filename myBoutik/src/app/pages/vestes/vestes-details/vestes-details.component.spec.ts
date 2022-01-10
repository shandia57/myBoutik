import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestesDetailsComponent } from './vestes-details.component';

describe('VestesDetailsComponent', () => {
  let component: VestesDetailsComponent;
  let fixture: ComponentFixture<VestesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
