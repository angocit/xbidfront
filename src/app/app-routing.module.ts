import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const routes: Routes = [
  {path:'', component:ClientComponent},
  {path:'dashboard', component:AdminComponent, children:[
    {path:'product/add',component:AddproductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
