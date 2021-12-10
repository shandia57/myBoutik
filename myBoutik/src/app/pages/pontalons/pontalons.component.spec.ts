import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontalonsComponent } from './pontalons.component';

describe('PontalonsComponent', () => {
  let component: PontalonsComponent;
  let fixture: ComponentFixture<PontalonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontalonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
