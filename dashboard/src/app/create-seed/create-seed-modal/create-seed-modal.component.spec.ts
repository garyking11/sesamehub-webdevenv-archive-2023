import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeedModalComponent } from './create-seed-modal.component';

describe('CreateSeedModalComponent', () => {
  let component: CreateSeedModalComponent;
  let fixture: ComponentFixture<CreateSeedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CreateSeedModalComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
