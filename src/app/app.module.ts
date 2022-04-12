import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductListComponent } from './product-list/product-list.component';


import { HttpClientModule } from '@angular/common/http';
import { SelectClientComponent } from './select-client/select-client.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ProductListComponent,
    SelectClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
