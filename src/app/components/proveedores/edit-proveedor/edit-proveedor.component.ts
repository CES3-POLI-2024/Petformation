import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedores.model';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/productos.model';


@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {

  productos: Producto[]=[];

  proveedorDetails: Proveedor = {
    iD_PROVEEDOR: 0,
    nombrE_PROVEEDOR: '',
    contactO_PROVEEDOR: '',
    telefonO_PROVEEDOR: '',
    correO_PROVEEDOR : '',
    direccioN_PROVEEDOR: '',
    iD_PRODUCTO: 0
  };

  constructor(private route: ActivatedRoute, private proveedoresService: ProveedoresService, private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          if(id){
            this.proveedoresService.getProveedor(id).subscribe({
              next: (response) =>{
                this.proveedorDetails = response;
              }
            });
          }
        }
      }
    )

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

  updateProveedor(){
    if (this.proveedorDetails && this.proveedorDetails.iD_PROVEEDOR != undefined){
      var converter = this.proveedorDetails.iD_PROVEEDOR.toString();
      this.proveedoresService.updateProveedor(converter, this.proveedorDetails).subscribe({
        next: (response) => {
          this.router.navigate(['proveedores'])
        }
      })
    }
  }

  deleteProveedor(id: number){
    if (id && id !== undefined) {
      var converter = (id).toString();
      this.proveedoresService.deleteProveedor(converter).subscribe({
        next: (response) => {
          this.router.navigate(['proveedores']);
        }
      });
    }
  }

}
