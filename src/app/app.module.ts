import { CoreModule } from './core/core.module';
import { BlocksModule } from './blocks/blocks.module';
import { SharedModule } from './shared/shared.module';
import { AuthHeaderInterceptorService } from './core/interceptors/auth-header-interceptor.service';
import { ProductsModule } from './products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './blocks/root/app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    BlocksModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
