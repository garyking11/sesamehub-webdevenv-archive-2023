import { Injectable } from '@angular/core';

@Injectable()
export class IsLoadingService {

  // Clear loading icon after process is complete
  public isLoading: boolean = false
  constructor() { }

  isLoadingContent(contentToLoad){
    if(contentToLoad != '' || contentToLoad === null) {
      return this.isLoading = true;
    }
    else {
      return this.isLoading = false;
    }
  }

}
