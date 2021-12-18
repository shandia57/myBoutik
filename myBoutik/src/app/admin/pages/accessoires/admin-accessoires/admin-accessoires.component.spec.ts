import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessoiresComponent } from './admin-accessoires.component';

describe('AdminAccessoiresComponent', () => {
  let component: AdminAccessoiresComponent;
  let fixture: ComponentFixture<AdminAccessoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccessoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
