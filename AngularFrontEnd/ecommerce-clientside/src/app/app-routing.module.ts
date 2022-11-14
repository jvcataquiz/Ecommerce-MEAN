import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';

const routes: Routes = [
  {path:'', component:ViewallProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
