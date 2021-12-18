import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTshirtsComponent } from './update-tshirts.component';

describe('UpdateTshirtsComponent', () => {
  let component: UpdateTshirtsComponent;
  let fixture: ComponentFixture<UpdateTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
