import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTshirtsComponent } from './admin-tshirts.component';

describe('AdminTshirtsComponent', () => {
  let component: AdminTshirtsComponent;
  let fixture: ComponentFixture<AdminTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
