import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPullsComponent } from './admin-pulls.component';

describe('AdminPullsComponent', () => {
  let component: AdminPullsComponent;
  let fixture: ComponentFixture<AdminPullsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPullsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
