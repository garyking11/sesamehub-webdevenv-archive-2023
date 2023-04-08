import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildkitLinksComponent } from './buildkit-links.component';

describe('BuildkitLinksComponent', () => {
  let component: BuildkitLinksComponent;
  let fixture: ComponentFixture<BuildkitLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [BuildkitLinksComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildkitLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
