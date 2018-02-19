import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
