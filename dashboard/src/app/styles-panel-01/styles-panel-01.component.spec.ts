import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesPanel01Component } from './styles-panel-01.component';

describe('StylesPanel01Component', () => {
  let component: StylesPanel01Component;
  let fixture: ComponentFixture<StylesPanel01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [StylesPanel01Component],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesPanel01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
