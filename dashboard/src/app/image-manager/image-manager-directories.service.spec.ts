import { TestBed, inject } from '@angular/core/testing';

import { ImageManagerDirectoriesService } from './image-manager-directories.service';

describe('ImageManagerDirectoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ImageManagerDirectoriesService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([ImageManagerDirectoriesService], (service: ImageManagerDirectoriesService) => {
    expect(service).toBeTruthy();
  }));
});
