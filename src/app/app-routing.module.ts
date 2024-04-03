import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { AddClientComponent } from './components/clientes/add-client/add-client.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: ClientesListComponent
  // },
  {
    path:'clientes',
    component: ClientesListComponent
  },
  {
    path:'clientes/add',
    component: AddClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
