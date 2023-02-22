import { TestBed } from '@angular/core/testing';

import { MenuServiceServiceService } from './menu-service-service.service';

describe('MenuServiceServiceService', () => {
  let service: MenuServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
