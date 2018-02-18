import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './catalog/catalog.module';
import { MylistModule } from './mylist/mylist.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    MylistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
