/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsLoadingService } from './is-loading.service';

describe('Service: IsLoading', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [IsLoadingService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should ...', inject([IsLoadingService], (service: IsLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
