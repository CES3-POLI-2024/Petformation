import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/ventas.model'
import { Cliente } from 'src/app/models/clientes.model'
import { ClientesService } from 'src/app/services/clientes.service';
import { VentasService } from 'src/app/services/ventas.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  constructor(private router: Router, private clientesService: ClientesService, private ventasServicev: VentasService) { }

  ventas: Venta [] = [];
  nombresClientes: { [id: string]: string } = {};
  anios: number[] = [];

  mesSeleccionado = new Date().getMonth();
  anioSeleccionado = new Date().getFullYear();
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];


  ngOnInit() {

    this.ventasServicev.getAllVentas()
    .subscribe({
      next: (venta) => {
        this.ventas = venta;

        this.ventas.forEach(venta => {
          const idCliente = venta.iD_CLIENTE as string;

          if (idCliente && !this.nombresClientes[idCliente]) {
            this.clientesService.getCliente(idCliente).subscribe({
              next: (cliente) => {
                this.nombresClientes[idCliente] = cliente.nombrE_CLIENTE as string;
                //console.log(this.nombresClientes[idCliente]);
              },
              error: (error) => {
                console.error('Error al obtener cliente', error);
              }
            });
          }
        });
      },
      error: (response) => {
        console.log(response);
      }
    })
        const anioActual = new Date().getFullYear();
    this.anios = Array.from({ length: 5 }, (_, i) => anioActual - i);
  }
  
  redirigir() {
    this.router.navigate(['detallesVentas/add']);
  }



async generarPDF() {
  const doc = new jsPDF();
  const logo = await this.getImageFromAssets('assets/calupetslogo.png');


  doc.addImage(logo, 'PNG', 10, 10, 30, 30);
  doc.setFontSize(18);
  doc.text('Reporte de Ventas por Mes', 50, 20);
  doc.setFontSize(12);
  doc.text(`Mes: ${this.meses[this.mesSeleccionado]} - Año: ${this.anioSeleccionado}`, 50, 28);


  const ventasFiltradas = this.ventas.filter(v => {
    const fecha = new Date(v.timestamP_VENTA!);
    return fecha.getMonth() === this.mesSeleccionado && fecha.getUTCFullYear() === this.anioSeleccionado;
  });

  const tableData = ventasFiltradas.map(v => [
    v.iD_CLIENTE?.toString() || 'Sin ID',
    this.nombresClientes[v.iD_CLIENTE?.toString() || ''] || 'Desconocido',
    v.graN_TOTAL != null ? `$${v.graN_TOTAL.toFixed(2)}` : '$0.00',
    v.timestamP_VENTA ? new Date(v.timestamP_VENTA).toLocaleDateString() : 'Sin fecha'
  ]);

  const autoTableResult = autoTable(doc, {
    head: [['Cédula', 'Cliente', 'Total', 'Fecha']],
    body: tableData,
    startY: 50,
    theme: 'grid',
    didDrawPage: (data) => {
      const totalGeneral = ventasFiltradas.reduce((acc, v) => acc + (v.graN_TOTAL || 0), 0);
      doc.setFontSize(14);
      doc.text(`Total general: $${totalGeneral.toFixed(2)}`, 14, data.cursor!.y + 10);
    }
  });

  doc.save('reporte_ventas.pdf');
}

  getImageFromAssets(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = (err) => reject(err);
    });
  }

}
