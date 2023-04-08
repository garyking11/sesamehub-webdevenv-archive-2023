import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWelcomeTextComponent } from './get-welcome-text.component';

describe('GetWelcomeTextComponent', () => {
  let component: GetWelcomeTextComponent;
  let fixture: ComponentFixture<GetWelcomeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [GetWelcomeTextComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWelcomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
