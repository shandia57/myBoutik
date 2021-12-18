import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePontalonsComponent } from './update-pontalons.component';

describe('UpdatePontalonsComponent', () => {
  let component: UpdatePontalonsComponent;
  let fixture: ComponentFixture<UpdatePontalonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePontalonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePontalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
