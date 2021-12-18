import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChassuresComponent } from './update-chassures.component';

describe('UpdateChassuresComponent', () => {
  let component: UpdateChassuresComponent;
  let fixture: ComponentFixture<UpdateChassuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChassuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChassuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
