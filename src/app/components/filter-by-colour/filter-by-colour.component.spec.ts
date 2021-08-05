import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByColourComponent } from './filter-by-colour.component';

describe('FilterByColourComponent', () => {
  let component: FilterByColourComponent;
  let fixture: ComponentFixture<FilterByColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByColourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
