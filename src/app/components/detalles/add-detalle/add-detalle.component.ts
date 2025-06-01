// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Detalle } from 'src/app/models/detalles.model';
// import { ClientesService } from 'src/app/services/clientes.service';
// import { DetallesService } from 'src/app/services/detalles.service';
// import { CaluproductsService } from 'src/app/services/caluproducts.service';
// import { Caluproduct } from 'src/app/models/caluproduct';

// @Component({
//   selector: 'app-add-detalle',
//   templateUrl: './add-detalle.component.html',
//   styleUrls: ['./add-detalle.component.css']
// })
// export class AddDetalleComponent implements OnInit {

//   caluproducts: Caluproduct[]=[];

//     addDetalle: Detalle = {
//     iD_DETALLE: '',
//     timestamP_DETALLE: new Date,
//     iD_VENTA: '',
//     cantidaD_DETALLE: '',
//     iD_CALUPRODUCT: '',
//     iD_CLIENTE: '',
//     nombrE_CLIENTE: '',
//     nombrE_CALUPRODUCT: '',
//     graN_TOTAL: 0
//     }

//   productosAgregados: Caluproduct[] = [];

//   constructor(private clientesService: ClientesService, private detallesService: DetallesService, private caluproductsService: CaluproductsService, private router: Router) { }

//   ngOnInit() {
//         this.caluproductsService.getAllCaluproducts().subscribe({
//       next: (caluproduct) => {
//         this.caluproducts = caluproduct;
//         console.log(this.caluproducts);
//       },
//       error: (error) => {
//         console.error('Error al obtener producto', error);
//       }
//     });
//   }

//   verificarCliente(event: any) {
//     event.preventDefault(); 

//     const cedula = this.addDetalle.iD_CLIENTE;
//     if (cedula) {
//       this.clientesService.getCliente(cedula).subscribe({
//         next: (cliente) => {
//           this.addDetalle.nombrE_CLIENTE = cliente.nombrE_CLIENTE;
//           //alert('Cliente encontrado: ' + cliente.nombrE_CLIENTE);
//         },
//         error: () => {
//           this.addDetalle.nombrE_CLIENTE = '';
//           alert('Cliente no encontrado. Por favor créelo.');
//         }
//       });
//     }
//   }

//   clientExistMethod(id: string): Promise<{ id: string; nombre: string }>{
//     return new Promise((resolve) => {
//       this.clientesService.getCliente(id).subscribe({
//         next: (cliente) => {
//           resolve({ id: cliente.iD_CLIENTE, nombre: cliente.nombrE_CLIENTE as string });
//         }
//       });
//     });
//   }

//   async addDetalleMethod(){
//     var exist = await this.clientExistMethod(this.addDetalle.iD_CLIENTE as string);
    
//       if(!exist.id){
//         alert('Por favor cree el cliente');
//       }

//     const detallesParaGuardar = this.productosAgregados.map(producto => ({
//       iD_DETALLE: '',
//       timestamP_DETALLE: new Date(),
//       iD_VENTA: this.addDetalle.iD_VENTA,
//       iD_CLIENTE: exist.id,
//       nombrE_CLIENTE: exist.nombre,
//       iD_CALUPRODUCT: producto.iD_CALUPRODUCT?.toString(),
//       nombrE_CALUPRODUCT: producto.nombrE_CALUPRODUCT,
//       cantidaD_DETALLE: '',
//       graN_TOTAL: producto.preciO_CALUPRODUCT,
//       total_DETALLE: producto.preciO_CALUPRODUCT
//       }));

//       this.detallesService.addDetalleVenta(detallesParaGuardar).subscribe({
//         next: () => {
//           alert('Venta registrada exitosamente');
//           this.router.navigate(['/detallesVentas']);
//         },
//         error: (err) => {
//           console.error('Error al guardar detalles', err);
//           alert('Error al registrar venta');
//         }
//       });
//     }
    

//     agregarProducto() {
//       const producto = this.caluproducts.find(p =>
//         p.iD_CALUPRODUCT === Number(this.addDetalle.iD_CALUPRODUCT)
//       );

//       if (producto) {
//         this.productosAgregados.push(producto);
//         this.addDetalle.graN_TOTAL! += producto.preciO_CALUPRODUCT ?? 0;
//         console.log('Producto agregado:', producto.nombrE_CALUPRODUCT);
//       } else {
//         console.warn('Producto no encontrado para ID:', this.addDetalle.iD_CALUPRODUCT);
//       }
//     }

//   }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Detalle } from 'src/app/models/detalles.model';
// import { ClientesService } from 'src/app/services/clientes.service';
// import { DetallesService } from 'src/app/services/detalles.service';
// import { CaluproductsService } from 'src/app/services/caluproducts.service';
// import { Caluproduct } from 'src/app/models/caluproduct';

// @Component({
//   selector: 'app-add-detalle',
//   templateUrl: './add-detalle.component.html',
//   styleUrls: ['./add-detalle.component.css']
// })
// export class AddDetalleComponent implements OnInit {

//   caluproducts: Caluproduct[] = [];

//   addDetalle: Detalle = {
//     iD_DETALLE: '',
//     timestamP_DETALLE: new Date(),
//     iD_VENTA: '',
//     cantidaD_DETALLE: '',
//     iD_CALUPRODUCT: '',
//     iD_CLIENTE: '',
//     nombrE_CLIENTE: '',
//     nombrE_CALUPRODUCT: '',
//     graN_TOTAL: 0
//   }

//   productosAgregados: Caluproduct[] = [];

//   constructor(
//     private clientesService: ClientesService,
//     private detallesService: DetallesService,
//     private caluproductsService: CaluproductsService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.caluproductsService.getAllCaluproducts().subscribe({
//       next: (caluproduct) => {
//         this.caluproducts = caluproduct;
//       },
//       error: (error) => {
//         console.error('Error al obtener producto', error);
//       }
//     });
//   }

//   verificarCliente(event: any): void {
//     event.preventDefault();

//     const cedula = this.addDetalle.iD_CLIENTE;
//     if (cedula) {
//       this.clientesService.getCliente(cedula).subscribe({
//         next: (cliente) => {
//           this.addDetalle.nombrE_CLIENTE = cliente.nombrE_CLIENTE;
//         },
//         error: () => {
//           this.addDetalle.nombrE_CLIENTE = '';
//           alert('Cliente no encontrado. Por favor créelo.');
//         }
//       });
//     }
//   }

//   clientExistMethod(id: string): Promise<{ id: string; nombre: string }> {
//     return new Promise((resolve) => {
//       this.clientesService.getCliente(id).subscribe({
//         next: (cliente) => {
//           resolve({ id: cliente.iD_CLIENTE, nombre: cliente.nombrE_CLIENTE! });
//         },
//         error: () => {
//           resolve({ id: '', nombre: '' });
//         }
//       });
//     });
//   }

//   async addDetalleMethod(): Promise<void> {
//     const cliente = await this.clientExistMethod(this.addDetalle.iD_CLIENTE as string);

//     if (!cliente.id) {
//       alert('Por favor cree el cliente antes de registrar la venta.');
//       return;
//     }

//     const detallesParaGuardar: Detalle[] = this.productosAgregados.map(producto => ({
//       iD_DETALLE: '',
//       timestamP_DETALLE: new Date(),
//       iD_VENTA: this.addDetalle.iD_VENTA,
//       iD_CLIENTE: cliente.id,
//       nombrE_CLIENTE: cliente.nombre,
//       iD_CALUPRODUCT: producto.iD_CALUPRODUCT?.toString() || '',
//       nombrE_CALUPRODUCT: producto.nombrE_CALUPRODUCT,
//       cantidaD_DETALLE: '1', // Ajusta si vas a manejar cantidad
//       graN_TOTAL: producto.preciO_CALUPRODUCT ?? 0,
//       total_DETALLE: producto.preciO_CALUPRODUCT ?? 0
//     }));

//     this.detallesService.addDetalleVenta(detallesParaGuardar).subscribe({
//       next: () => {
//         alert('Venta registrada exitosamente');
//         this.router.navigate(['/detallesVentas']);
//       },
//       error: (err) => {
//         console.error('Error al guardar detalles', err);
//         alert('Error al registrar venta');
//       }
//     });
//   }

//   agregarProducto(): void {
//     const producto = this.caluproducts.find(p =>
//       p.iD_CALUPRODUCT === Number(this.addDetalle.iD_CALUPRODUCT)
//     );

//     if (producto) {
//       this.productosAgregados.push(producto);
//       this.addDetalle.graN_TOTAL! += producto.preciO_CALUPRODUCT ?? 0;
//     } else {
//       console.warn('Producto no encontrado para ID:', this.addDetalle.iD_CALUPRODUCT);
//     }
//   }
// }




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalles.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { DetallesService } from 'src/app/services/detalles.service';
import { CaluproductsService } from 'src/app/services/caluproducts.service';
import { Caluproduct } from 'src/app/models/caluproduct';
import { VentasService } from 'src/app/services/ventas.service'; // NUEVO
import { Venta } from 'src/app/models/ventas.model'; // NUEVO

@Component({
  selector: 'app-add-detalle',
  templateUrl: './add-detalle.component.html',
  styleUrls: ['./add-detalle.component.css']
})
export class AddDetalleComponent implements OnInit {

  caluproducts: Caluproduct[] = [];

  addDetalle: Detalle = {
    iD_DETALLE: '',
    timestamP_DETALLE: new Date(),
    iD_VENTA: '',
    cantidaD_DETALLE: '',
    iD_CALUPRODUCT: '',
    iD_CLIENTE: '',
    nombrE_CLIENTE: '',
    nombrE_CALUPRODUCT: '',
    graN_TOTAL: 0
  };

  productosAgregados: Caluproduct[] = [];

  constructor(
    private clientesService: ClientesService,
    private detallesService: DetallesService,
    private caluproductsService: CaluproductsService,
    private ventasService: VentasService, // NUEVO
    private router: Router
  ) { }

  ngOnInit() {
    this.caluproductsService.getAllCaluproducts().subscribe({
      next: (caluproduct) => {
        this.caluproducts = caluproduct;
      },
      error: (error) => {
        console.error('Error al obtener productos', error);
      }
    });
  }

  verificarCliente(event: any) {
    event.preventDefault();
    const cedula = this.addDetalle.iD_CLIENTE;
    if (cedula) {
      this.clientesService.getCliente(cedula).subscribe({
        next: (cliente) => {
          this.addDetalle.nombrE_CLIENTE = cliente.nombrE_CLIENTE;
        },
        error: () => {
          this.addDetalle.nombrE_CLIENTE = '';
          alert('Cliente no encontrado. Por favor créelo.');
        }
      });
    }
  }

  clientExistMethod(id: string): Promise<{ id: string; nombre: string }> {
    return new Promise((resolve, reject) => {
      this.clientesService.getCliente(id).subscribe({
        next: (cliente) => resolve({ id: cliente.iD_CLIENTE, nombre: cliente.nombrE_CLIENTE! }),
        error: () => reject('Cliente no encontrado')
      });
    });
  }

  async addDetalleMethod() {
    try {
      // 1. Verificar cliente
      const cliente = await this.clientExistMethod(this.addDetalle.iD_CLIENTE as string);

      // 2. Crear venta
      const nuevaVenta: Venta = {
        //iD_VENTA: 0, // Se ignora en backend si es auto-incremental
        timestamP_VENTA: new Date(),
        iD_CLIENTE: cliente.id,
        graN_TOTAL: this.addDetalle.graN_TOTAL ?? 0
      };

      this.ventasService.addVentaMethod(nuevaVenta).subscribe({
        next: (ventaCreada) => {
          const idVenta = ventaCreada.iD_VENTA;

          // 3. Crear detalles con ID_VENTA
          const detallesParaGuardar: Detalle[] = this.productosAgregados.map(producto => ({
            //iD_DETALLE: '',
            timestamP_DETALLE: new Date(),
            iD_VENTA: idVenta!.toString(),
            iD_CLIENTE: cliente.id,
            nombrE_CLIENTE: cliente.nombre,
            iD_CALUPRODUCT: producto.iD_CALUPRODUCT?.toString(),
            nombrE_CALUPRODUCT: producto.nombrE_CALUPRODUCT,
            cantidaD_DETALLE: '1', // Puedes ajustar este valor según necesites
            graN_TOTAL: producto.preciO_CALUPRODUCT ?? 0,
            total_DETALLE: producto.preciO_CALUPRODUCT ?? 0
          }));

          this.detallesService.addDetalleVenta(detallesParaGuardar).subscribe({
            next: () => {
              alert('Venta registrada exitosamente');
              this.router.navigate(['/ventas']);
            },
            error: (err) => {
              console.error('Error al guardar detalles', err);
              alert('Error al registrar detalles de la venta');
            }
          });
        },
        error: (err) => {
          console.error('Error al guardar venta', err);
          alert('Error al registrar la venta');
        }
      });

    } catch (error) {
      alert(error);
    }
  }

  agregarProducto() {
    const producto = this.caluproducts.find(p =>
      p.iD_CALUPRODUCT === Number(this.addDetalle.iD_CALUPRODUCT)
    );

    if (producto) {
      this.productosAgregados.push(producto);
      this.addDetalle.graN_TOTAL! += producto.preciO_CALUPRODUCT ?? 0;
    } else {
      console.warn('Producto no encontrado para ID:', this.addDetalle.iD_CALUPRODUCT);
    }
  }
}
