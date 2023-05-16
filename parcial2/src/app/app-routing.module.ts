import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'individual', component: IndividualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
