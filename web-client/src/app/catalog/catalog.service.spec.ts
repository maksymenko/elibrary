import { TestBed, inject } from '@angular/core/testing';
import { CatalogService } from './catalog.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


describe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule, CatalogService],
      imports: [HttpModule, HttpClientModule]
    });
  });

  it('should be created', inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
  }));
});
