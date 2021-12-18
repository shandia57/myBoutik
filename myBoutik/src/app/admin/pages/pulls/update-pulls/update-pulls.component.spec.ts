import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePullsComponent } from './update-pulls.component';

describe('UpdatePullsComponent', () => {
  let component: UpdatePullsComponent;
  let fixture: ComponentFixture<UpdatePullsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePullsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
