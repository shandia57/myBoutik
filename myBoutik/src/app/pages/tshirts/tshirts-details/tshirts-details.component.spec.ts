import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtsDetailsComponent } from './tshirts-details.component';

describe('TshirtsDetailsComponent', () => {
  let component: TshirtsDetailsComponent;
  let fixture: ComponentFixture<TshirtsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
