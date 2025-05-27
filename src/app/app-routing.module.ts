import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { AddClientComponent } from './components/clientes/add-client/add-client.component';
import { EditClientComponent } from './components/clientes/edit-client/edit-client.component';
import { ProveedoresListComponent } from './components/proveedores/proveedores-list/proveedores-list.component';
import { AddProveedorComponent } from './components/proveedores/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from './components/proveedores/edit-proveedor/edit-proveedor.component';
import { ProductsListComponent } from './components/productos/products-list/products-list.component';
import { AddProductComponent } from './components/productos/add-product/add-product.component';
import { EditProductComponent } from './components/productos/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { MascotasListComponent } from './components/mascotas/mascotas-list/mascotas-list.component';  
import { AddMascotaComponent } from './components/mascotas/add-mascota/add-mascota.component';
import { EdtMascotaComponent } from './components/mascotas/edit-mascota/edt-mascota.component';
import { DetallesListComponent } from './components/detalles/detalles-list/detalles-list.component';
import { AddDetalleComponent } from './components/detalles/add-detalle/add-detalle.component';
import { CaluproductsListComponent } from './components/caluproducts/caluproducts-list/caluproducts-list.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'clientes',
    component: ClientesListComponent
  },
  {
    path:'clientes/add',
    component: AddClientComponent
  },
  {
    path:'clientes/edit/:id',
    component: EditClientComponent
  },
  {
    path:'proveedores',
    component: ProveedoresListComponent
  },
  {
    path:'proveedores/add',
    component: AddProveedorComponent
  },
  {
    path:'proveedores/edit/:id',
    component: EditProveedorComponent
  },
  {
    path:'productos',
    component: ProductsListComponent
  },
  {
    path:'productos/add',
    component: AddProductComponent
  },
  {
    path:'productos/edit/:id',
    component: EditProductComponent
  },
  {
    path:'mascotasByClient/mascotas/:id',
    component: MascotasListComponent
  },
  {
    path:'mascotas/add',
    component: AddMascotaComponent
  },
  {
    path:'mascotas/edit/:id',
    component: EdtMascotaComponent
  },
  {
    path:'detallesVentas',
    component: DetallesListComponent
  },
  {
    path:'detallesVentas/add',
    component: AddDetalleComponent
  },
  {
    path:'caluproducts',
    component: CaluproductsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
