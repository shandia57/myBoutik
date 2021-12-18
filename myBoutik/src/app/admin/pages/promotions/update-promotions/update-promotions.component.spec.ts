import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromotionsComponent } from './update-promotions.component';

describe('UpdatePromotionsComponent', () => {
  let component: UpdatePromotionsComponent;
  let fixture: ComponentFixture<UpdatePromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
