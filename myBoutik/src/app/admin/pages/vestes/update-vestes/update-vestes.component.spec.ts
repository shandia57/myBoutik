import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVestesComponent } from './update-vestes.component';

describe('UpdateVestesComponent', () => {
  let component: UpdateVestesComponent;
  let fixture: ComponentFixture<UpdateVestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
