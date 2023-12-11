import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { FeatureComponent } from './components/feature/feature.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonDirective } from './directives/button.directive';
import { TextPipe } from './pipes/text.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ProductComponent,
    ButtonDirective,
    TextPipe,
    PhonePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
