import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeDetailComponent } from './cafe/cafe-detail/cafe-detail.component';

const routes: Routes = [
  // Otras rutas existentes...
  { path: 'cafe/:id', component: CafeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
