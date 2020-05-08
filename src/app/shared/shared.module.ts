import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SideBarDropdownDirective } from './side-bar-dropdown.directive';


@NgModule({
  declarations: [
    SideBarComponent,
    PageNotFoundComponent,
    SideBarDropdownDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SideBarComponent,
    PageNotFoundComponent,
    SideBarDropdownDirective
  ]
})
export class SharedModule { }
