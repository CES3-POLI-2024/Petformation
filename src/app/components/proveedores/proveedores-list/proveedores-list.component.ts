import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {

  proveedores: Proveedor[]=[];
  nombresProductos: { [id: string]: string } = {};

  constructor(private proveedoresService: ProveedoresService, private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    
    this.proveedoresService.getAllProveedores()
    .subscribe({
      next: (proveedores) => {
        //console.log(proveedores);
        this.proveedores = proveedores;

        this.proveedores.forEach(proveedor => {
          const idProducto = proveedor.iD_PRODUCTO?.toString();

          if (idProducto && !this.nombresProductos[idProducto]) {
            this.productosService.getProducto(idProducto).subscribe({
              next: (producto) => {
                this.nombresProductos[idProducto] = producto.nombrE_PRODUCTO as string;
                //console.log(this.nombresProductos[idProducto]);
              },
              error: (error) => {
                console.error('Error al obtener producto', error);
              }
            });
          }
        });
      },
      error: (response) => {
        console.log(response);
      }
    })

  }

  redirigir() {
    this.router.navigate(['proveedores/add']);
  }

}
