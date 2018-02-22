import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:isbn', component: CatalogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
