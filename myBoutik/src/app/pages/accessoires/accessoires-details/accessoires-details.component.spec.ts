import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresDetailsComponent } from './accessoires-details.component';

describe('AccessoiresDetailsComponent', () => {
  let component: AccessoiresDetailsComponent;
  let fixture: ComponentFixture<AccessoiresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
