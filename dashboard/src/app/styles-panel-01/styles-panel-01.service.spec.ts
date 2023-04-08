import { TestBed, inject } from '@angular/core/testing';

import { StylesPanel01Service } from './styles-panel-01.service';

describe('StylesPanel01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [StylesPanel01Service],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([StylesPanel01Service], (service: StylesPanel01Service) => {
    expect(service).toBeTruthy();
  }));
});
