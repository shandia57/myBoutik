import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontalonsDetailsComponent } from './pontalons-details.component';

describe('PontalonsDetailsComponent', () => {
  let component: PontalonsDetailsComponent;
  let fixture: ComponentFixture<PontalonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontalonsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontalonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
