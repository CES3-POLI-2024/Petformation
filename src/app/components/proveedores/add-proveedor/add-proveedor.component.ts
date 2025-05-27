import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/productos.model';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  productos: Producto[]=[];

  addProveedor: Proveedor = {
    iD_PROVEEDOR: 0,
    nombrE_PROVEEDOR: '',
    contactO_PROVEEDOR: '',
    telefonO_PROVEEDOR: '',
    correO_PROVEEDOR: '',
    direccioN_PROVEEDOR: '',
    iD_PRODUCTO: 0
  }

  constructor(private proveedoresService: ProveedoresService, private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productosService.getAllProductos().subscribe({
      next: (producto) => {
        this.productos = producto;
        console.log(this.productos);
      },
      error: (error) => {
        console.error('Error al obtener producto', error);
      }
    });
  }
  
  addProveedorMethod(){
    this.proveedoresService.addProveedorMethod(this.addProveedor)
    .subscribe({
      next: (proveedor) => {
        this.router.navigate(['proveedores']);
      }
    });
  }

}
