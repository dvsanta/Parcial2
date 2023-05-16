import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  { path: 'individual', component: IndividualComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})


export class AppModule { }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial2';
}
