import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursDashboardComponent } from './colours-dashboard.component';

describe('ColoursDashboardComponent', () => {
  let component: ColoursDashboardComponent;
  let fixture: ComponentFixture<ColoursDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoursDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoursDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
