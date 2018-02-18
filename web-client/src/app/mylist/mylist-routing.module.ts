import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MylistComponent } from './mylist.component';

const routes: Routes = [{path: 'mylist', component: MylistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MylistRoutingModule { }
