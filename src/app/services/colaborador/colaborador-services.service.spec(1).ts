import { TestBed } from '@angular/core/testing';

import { ColaboradorService } from './colaborador.service';

describe('ColaboradorServicesService', () => {
  let service: ColaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
