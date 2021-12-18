import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccessoiresComponent } from './update-accessoires.component';

describe('UpdateAccessoiresComponent', () => {
  let component: UpdateAccessoiresComponent;
  let fixture: ComponentFixture<UpdateAccessoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccessoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
