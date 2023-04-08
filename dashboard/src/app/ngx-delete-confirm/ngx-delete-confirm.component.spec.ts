import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDeleteConfirmComponent } from './ngx-delete-confirm.component';

describe('NgxDeleteConfirmComponent', () => {
  let component: NgxDeleteConfirmComponent;
  let fixture: ComponentFixture<NgxDeleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [NgxDeleteConfirmComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
