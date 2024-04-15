import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';

const routes: Routes = [
  {
    path:'person-profile',
    component:PersonProfileComponent
  },
  {
    path:'person-list',
    component:PersonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
