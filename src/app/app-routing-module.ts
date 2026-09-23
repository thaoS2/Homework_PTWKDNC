import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
import { CatalogComponent } from './Bai14/catalog.component/catalog.component';
import { ServiceCustomerGroupComponent } from './Bai18/service-customer-group.component/service-customer-group.component';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail},
  { path: 'catalog',component: CatalogComponent},
  { path: 'customer-group', component: ServiceCustomerGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }