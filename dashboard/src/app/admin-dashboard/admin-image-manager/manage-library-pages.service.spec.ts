import { TestBed, inject } from '@angular/core/testing';

import { ManageLibraryPagesService } from './manage-library-pages.service';

describe('ManageLibraryPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ManageLibraryPagesService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([ManageLibraryPagesService], (service: ManageLibraryPagesService) => {
    expect(service).toBeTruthy();
  }));
});
