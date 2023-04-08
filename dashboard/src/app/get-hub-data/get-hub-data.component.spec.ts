import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHubDataComponent } from './get-hub-data.component';

describe('GetHubDataComponent', () => {
  let component: GetHubDataComponent;
  let fixture: ComponentFixture<GetHubDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [GetHubDataComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHubDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
