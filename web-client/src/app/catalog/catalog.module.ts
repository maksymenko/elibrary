import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
