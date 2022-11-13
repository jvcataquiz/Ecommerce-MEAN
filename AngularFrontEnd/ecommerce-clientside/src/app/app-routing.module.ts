import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTryComponent } from './view-try/view-try.component';

const routes: Routes = [
  {path:'', component:ViewTryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
