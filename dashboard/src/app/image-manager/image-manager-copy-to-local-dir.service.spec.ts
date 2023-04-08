import { TestBed, inject } from '@angular/core/testing';

import { ImageManagerCopyToLocalDirService } from './image-manager-copy-to-local-dir.service';

describe('ImageManagerCopyToLocalDirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ImageManagerCopyToLocalDirService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([ImageManagerCopyToLocalDirService], (service: ImageManagerCopyToLocalDirService) => {
    expect(service).toBeTruthy();
  }));
});
