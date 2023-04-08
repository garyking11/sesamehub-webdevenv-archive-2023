import { TestBed } from '@angular/core/testing';

import { IfFileExistsService } from './if-file-exists.service';

describe('IfFileExistsService', () => {
  let service: IfFileExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfFileExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
