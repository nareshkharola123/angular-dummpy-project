import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { ENDPOINTS_CONFIG, EndpointsConfig } from './configs/endpoints.config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
    UserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: ENDPOINTS_CONFIG,
      useValue: EndpointsConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
