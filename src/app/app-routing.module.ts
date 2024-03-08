import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: ClientesListComponent
  // },
  {
    path:'clientes',
    component: ClientesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
