import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourEditFormComponent } from './colour-edit-form.component';

describe('ColourEditFormComponent', () => {
  let component: ColourEditFormComponent;
  let fixture: ComponentFixture<ColourEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
