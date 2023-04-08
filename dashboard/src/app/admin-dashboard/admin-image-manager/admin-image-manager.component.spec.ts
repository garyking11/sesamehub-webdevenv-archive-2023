import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageManagerComponent } from './admin-image-manager.component';

describe('AdminImageManagerComponent', () => {
  let component: AdminImageManagerComponent;
  let fixture: ComponentFixture<AdminImageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [AdminImageManagerComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
