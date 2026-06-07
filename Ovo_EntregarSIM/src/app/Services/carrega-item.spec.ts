import { TestBed } from '@angular/core/testing';

import { CarregaItem } from './carrega-item';

describe('CarregaItem', () => {
  let service: CarregaItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregaItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
