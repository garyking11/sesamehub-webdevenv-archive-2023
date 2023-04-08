import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMixinsComponent } from './css-mixins.component';

describe('CssMixinsComponent', () => {
  let component: CssMixinsComponent;
  let fixture: ComponentFixture<CssMixinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CssMixinsComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
