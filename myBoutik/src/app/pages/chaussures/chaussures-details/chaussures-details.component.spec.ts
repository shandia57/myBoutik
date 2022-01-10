import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussuresDetailsComponent } from './chaussures-details.component';

describe('ChaussuresDetailsComponent', () => {
  let component: ChaussuresDetailsComponent;
  let fixture: ComponentFixture<ChaussuresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaussuresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussuresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
