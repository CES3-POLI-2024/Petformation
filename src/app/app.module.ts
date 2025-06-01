import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { EditClientComponent } from './components/clientes/edit-client/edit-client.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './components/clientes/add-client/add-client.component';

import { ProveedoresListComponent } from './components/proveedores/proveedores-list/proveedores-list.component';
import { EditProveedorComponent } from './components/proveedores/edit-proveedor/edit-proveedor.component';
import { AddProveedorComponent } from './components/proveedores/add-proveedor/add-proveedor.component';

import { ProductsListComponent } from './components/productos/products-list/products-list.component';
import { AddProductComponent } from './components/productos/add-product/add-product.component';
import { EditProductComponent } from './components/productos/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { MascotasListComponent } from './components/mascotas/mascotas-list/mascotas-list.component';
import { AddMascotaComponent } from './components/mascotas/add-mascota/add-mascota.component';
import { EdtMascotaComponent } from './components/mascotas/edit-mascota/edt-mascota.component';
import { DeleteMascotaComponent } from './components/mascotas/delete-mascota/delete-mascota.component';

import { CaluproductsListComponent } from './components/caluproducts/caluproducts-list/caluproducts-list.component';
import { AddCaluproductComponent } from './components/caluproducts/add-caluproduct/add-caluproduct.component';
import { EditCaluproductComponent } from './components/caluproducts/edit-caluproduct/edit-caluproduct.component';

import { DetallesListComponent } from './components/detalles/detalles-list/detalles-list.component';
import { AddDetalleComponent } from './components/detalles/add-detalle/add-detalle.component';

import { VentasListComponent } from './components/ventas/ventas-list/ventas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    AddClientComponent,
    EditClientComponent,
    ProveedoresListComponent,
    EditProveedorComponent,
    AddProveedorComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    MascotasListComponent,
    AddMascotaComponent,
    EdtMascotaComponent,
    DeleteMascotaComponent,
    CaluproductsListComponent,
    AddCaluproductComponent,
    EditCaluproductComponent,
    DetallesListComponent,
    AddDetalleComponent,
    VentasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
