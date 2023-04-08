import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaveButtonsComponent } from './add-save-buttons.component';

describe('AddSaveButtonsComponent', () => {
  let component: AddSaveButtonsComponent;
  let fixture: ComponentFixture<AddSaveButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaveButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaveButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
