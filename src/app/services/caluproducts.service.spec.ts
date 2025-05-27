/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaluproductsService } from './caluproducts.service';

describe('Service: Caluproducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaluproductsService]
    });
  });

  it('should ...', inject([CaluproductsService], (service: CaluproductsService) => {
    expect(service).toBeTruthy();
  }));
});
