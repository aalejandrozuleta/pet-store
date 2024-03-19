/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartServicesService } from './cartServices.service';

describe('Service: CartServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartServicesService]
    });
  });

  it('should ...', inject([CartServicesService], (service: CartServicesService) => {
    expect(service).toBeTruthy();
  }));
});
