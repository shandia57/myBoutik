import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestesComponent } from './vestes.component';

describe('VestesComponent', () => {
  let component: VestesComponent;
  let fixture: ComponentFixture<VestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
