import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPontalonsComponent } from './admin-pontalons.component';

describe('AdminPontalonsComponent', () => {
  let component: AdminPontalonsComponent;
  let fixture: ComponentFixture<AdminPontalonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPontalonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPontalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
