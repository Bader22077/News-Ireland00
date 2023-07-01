import { TestBed } from '@angular/core/testing';

import { NewsIrelandService } from './news-ireland.service';

describe('NewsIrelandService', () => {
  let service: NewsIrelandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsIrelandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
