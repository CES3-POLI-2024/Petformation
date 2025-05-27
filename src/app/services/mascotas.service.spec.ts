/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MascotasService } from './mascotas.service';

describe('Service: Mascotas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotasService]
    });
  });

  it('should ...', inject([MascotasService], (service: MascotasService) => {
    expect(service).toBeTruthy();
  }));
});
