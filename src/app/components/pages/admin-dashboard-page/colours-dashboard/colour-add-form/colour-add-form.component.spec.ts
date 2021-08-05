import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourAddFormComponent } from './colour-add-form.component';

describe('ColourAddFormComponent', () => {
  let component: ColourAddFormComponent;
  let fixture: ComponentFixture<ColourAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
