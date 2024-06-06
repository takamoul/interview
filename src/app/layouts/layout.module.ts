import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule
  ],
  providers:[

  ]
})
export class LayoutModule { }
