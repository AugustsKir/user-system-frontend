import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./pages/users/users.component";
import {UserFormComponent} from "./pages/user-form/user-form.component";
import {EditFormComponent} from "./pages/edit-form/edit-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'

  },
  {
    path: 'users/new',
    component: UserFormComponent
  },
  {
    path: 'users/edit/:id',
    component: EditFormComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
