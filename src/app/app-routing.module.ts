import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { SelectClientComponent } from './select-client/select-client.component';

const routes: Routes = [
  {path:'',component:SelectClientComponent},
  {path:'invoice',component:InvoiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
