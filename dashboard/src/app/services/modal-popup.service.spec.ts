import { TestBed, inject } from '@angular/core/testing';

import { ModalPopupService } from './modal-popup.service';

describe('ModalPopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ModalPopupService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([ModalPopupService], (service: ModalPopupService) => {
    expect(service).toBeTruthy();
  }));
});
