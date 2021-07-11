import { TestBed } from '@angular/core/testing';

import { NodeMailerService } from './node-mailer.service';

describe('NodeMailerService', () => {
  let service: NodeMailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeMailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
