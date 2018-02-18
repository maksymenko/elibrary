import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MylistRoutingModule } from './mylist-routing.module';
import { MylistComponent } from './mylist.component';

@NgModule({
  imports: [
    CommonModule,
    MylistRoutingModule
  ],
  declarations: [MylistComponent]
})
export class MylistModule { }
