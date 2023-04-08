import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStaticComponent } from './modal-static.component';

describe('ModalStaticComponent', () => {
  let component: ModalStaticComponent;
  let fixture: ComponentFixture<ModalStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ModalStaticComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
