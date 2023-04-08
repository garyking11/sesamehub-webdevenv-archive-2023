import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropToUploadComponent } from './drag-drop-to-upload.component';

describe('DragDropToUploadComponent', () => {
  let component: DragDropToUploadComponent;
  let fixture: ComponentFixture<DragDropToUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropToUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropToUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
