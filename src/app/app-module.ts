import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './Bai14/catalog.component/catalog.component';
import { ServiceCustomerGroupComponent } from './Bai18/service-customer-group.component/service-customer-group.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    CatalogComponent,
    ServiceCustomerGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,  HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
