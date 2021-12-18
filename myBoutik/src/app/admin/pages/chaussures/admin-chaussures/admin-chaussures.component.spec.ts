import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChaussuresComponent } from './admin-chaussures.component';

describe('AdminChaussuresComponent', () => {
  let component: AdminChaussuresComponent;
  let fixture: ComponentFixture<AdminChaussuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChaussuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChaussuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
