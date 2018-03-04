import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent, DetailsComponent, FilterPipe],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
