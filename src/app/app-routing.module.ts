import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //http://localhost:4200/
  {path:'',component:AllContactsComponent},

  //http://localhost:4200/add-contacts
  {path:'add-contacts',component:AddContactsComponent},

  //http://localhost:4200/view-contacts/id
  {path:'view-contacts/:id',component:ViewContactsComponent},

  //http://localhost:4200/edit-contacts/id
  {path:'edit-contacts/:id',component:EditContactsComponent},

  //page-not-found
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
