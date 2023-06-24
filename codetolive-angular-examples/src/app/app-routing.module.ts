import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseallComponent } from './examples/promise/promiseall/promiseall.component';

const routes: Routes = [
  { path: 'promiseall', component: PromiseallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
