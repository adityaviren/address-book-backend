import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../../src/app/component/contact/contact.component'
import { CreateContactComponent} from '../../src/app/component/create-contact/create-contact.component'

const routes: Routes = [
  { path:'display',component:ContactComponent},
  { path:'create',component:CreateContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
