import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalles.model'
import { Venta } from 'src/app/models/ventas.model'
import { DetallesService } from 'src/app/services/detalles.service';
import { VentasService } from 'src/app/services/ventas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { CaluproductsService } from 'src/app/services/caluproducts.service';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detalles-list',
  templateUrl: './detalles-list.component.html',
  styleUrls: ['./detalles-list.component.css']
})
export class DetallesListComponent implements OnInit {

  detalles: Detalle[]=[];
  ventas: Venta = {};
  nombresVentas: { [id: string]: string } = {};
  nombreCliente: string = 'Cargando';
  telefonoCliente: string = 'Cargando';
  direccionCliente: string = 'Cargando';
  totalProductos: number = 0;

  constructor(private detallesService: DetallesService, private ventasService: VentasService, private clientesService: ClientesService, private caluproductsService: CaluproductsService, private router: Router, private route: ActivatedRoute, private ventasServicev: VentasService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      {
          next: (params) =>{
            const id = params.get('id');
            if(id){            
              this.detallesService.getDetalleVenta(id).subscribe({
                next: (response) =>{                
                  this.detalles = response;

                  this.detalles.forEach(detalle =>{
                    const idCaluProducto = detalle.iD_CALUPRODUCT?.toString();
                    const idCliente = detalle.iD_CLIENTE?.toString();
                    const idVenta = detalle.iD_VENTA?.toString();
                    if (idCaluProducto && !this.nombresVentas[idCaluProducto]) {
                      this.caluproductsService.getCaluproduct(idCaluProducto).subscribe({
                        next: (producto) => {
                          this.nombresVentas[idCaluProducto] = producto.nombrE_CALUPRODUCT as string;
                        },
                        error: (error) => {
                          console.error('Error al obtener producto', error);
                        }
                      });
                    }

                    this.ventasServicev.getVenta(idVenta as string)
                    .subscribe({
                      next: (venta) => {
                        this.ventas = venta;

                          const idCliente = venta.iD_CLIENTE as string;

                          if (idCliente ) {
                            this.clientesService.getCliente(idCliente).subscribe({
                              next: (cliente) => {
                                this.nombreCliente = cliente.nombrE_CLIENTE as string;
                                this.telefonoCliente = cliente.telefonO_CLIENTE as string;
                                this.direccionCliente = cliente.direccioN_CLIENTE as string;
                                this.totalProductos = venta.graN_TOTAL as number;
                              },
                              error: (error) => {
                                console.error('Error al obtener cliente', error);
                              }
                            });
                          }
                        
                      },
                      error: (response) => {
                        console.log(response);
                      }
                    })

                  })
                }
              });
            }
          }
      }        
    )
  }
  
  redirigir() {
    this.router.navigate(['detallesVentas/add']);
  }

  generarPDF() {
    const doc = new jsPDF(
      {
        orientation: 'landscape',
        unit: 'mm',
        format: [216, 139.5], // ancho x alto en mm
      }
    );

    const logoPath = 'assets/calupetslogo.png';

    const img = new Image();
    img.src = logoPath;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const imgData = canvas.toDataURL('image/png');

      let y = 10;
      doc.addImage(imgData, 'PNG', 10, y, 40, 35);
      y += 30;

      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Detalle de Venta', 70, y);
      y += 10;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(`Cliente: ${this.nombreCliente}`, 10, y);
      doc.text(`${this.telefonoCliente}`, 100, y);
      doc.text(`${this.direccionCliente}`, 130, y);
      y += 10;

      this.detalles.forEach((detalle, index) => {
        const producto = this.nombresVentas[detalle.iD_CALUPRODUCT?.toString() || ''] || 'Producto desconocido';
        doc.setFont('helvetica', 'normal');
        doc.text(`Producto: ${producto}`, 10, y);
        doc.text(`Precio: $${detalle.totaL_DETALLE}`, 100, y);
        y += 10;
      });

      const total = this.detalles.reduce((acc, det) => acc + (Number(det.totaL_DETALLE) || 0), 0);
      y += 10;
      doc.setFont('helvetica', 'bold');
      doc.text(`Total Venta: $${total}`, 10, y);

      doc.save(`Venta ${this.nombreCliente}.pdf`);
    };
  }
}
