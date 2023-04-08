/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RedirectsService } from './redirects.service';

describe('Service: Redirects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [RedirectsService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should ...', inject([RedirectsService], (service: RedirectsService) => {
    expect(service).toBeTruthy();
  }));
});
