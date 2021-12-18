import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVestesComponent } from './admin-vestes.component';

describe('AdminVestesComponent', () => {
  let component: AdminVestesComponent;
  let fixture: ComponentFixture<AdminVestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
