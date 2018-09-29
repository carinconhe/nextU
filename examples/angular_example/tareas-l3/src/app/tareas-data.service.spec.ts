/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TareasDataService } from './tareas-data.service';

describe('TareasDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasDataService]
    });
  });

  it('should ...', inject([TareasDataService], (service: TareasDataService) => {
    expect(service).toBeTruthy();
  }));
});
