import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalles.model'
import { DetallesService } from 'src/app/services/detalles.service';
import { VentasService } from 'src/app/services/ventas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { CaluproductsService } from 'src/app/services/caluproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-list',
  templateUrl: './detalles-list.component.html',
  styleUrls: ['./detalles-list.component.css']
})
export class DetallesListComponent implements OnInit {

  detalles: Detalle[]=[];
  nombresVentas: { [id: string]: string } = {};

  constructor(private detallesService: DetallesService, private ventasService: VentasService, private clientesService: ClientesService, private caluproductsService: CaluproductsService, private router: Router) { }

  ngOnInit() {
    this.detallesService.getAllDetalleVentas()
    .subscribe({
      next: (detalles) => {
        //console.log(proveedores);
        this.detalles = detalles;
        console.log(this.detalles);
        this.detalles.forEach(detalle => {
            const idVenta = detalle.iD_VENTA?.toString();
            let idCliente = "";
            let idCaluproduct = "";
            if (idVenta) {
              this.ventasService.getVenta(idVenta).subscribe({
                next: (venta) => {
                  idCliente = venta.iD_CLIENTE as string;
                  idCaluproduct = detalle.iD_CALUPRODUCT as string;
                  detalle.iD_CLIENTE = venta.iD_CLIENTE as string;
                  detalle.nombrE_CLIENTE = '';
                  detalle.nombrE_CALUPRODUCT= '';
                  detalle.graN_TOTAL = venta.graN_TOTAL;

                  //Obtener Cliente
                  this.clientesService.getCliente(idCliente).subscribe({
                    next: (cliente) => {
                      detalle.nombrE_CLIENTE = cliente.nombrE_CLIENTE;
                    },
                    error: (error) => {
                      console.error('Error al obtener producto', error);
                    }
                  })

                  //Obtener Producto
                  this.caluproductsService.getCaluproduct(idCaluproduct).subscribe({
                    next: (caluproduct) => {
                      detalle.nombrE_CALUPRODUCT = caluproduct.nombrE_CALUPRODUCT;
                    },
                    error: (error) => {
                      console.error('Error al obtener producto', error);
                    }
                  })
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
    this.router.navigate(['detallesVentas/add']);
  }

}
