import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { ENDPOINTS_CONFIG, EndpointsConfig } from './configs/endpoints.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    // custom module
    AppRoutingModule,
    SharedModule,
    AuthModule,
    BlogModule,
    UserModule
  ],
  providers: [
    {provide: ENDPOINTS_CONFIG, useValue: EndpointsConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
