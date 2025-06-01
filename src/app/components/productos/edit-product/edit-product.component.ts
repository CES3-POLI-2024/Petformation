import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productoDetails: Producto = {
    iD_PRODUCTO: 0,
    nombrE_PRODUCTO: '',
    tamanO_PRODUCTO: '',
    coloR_PRODUCTO: '',
    contenidO_PRODUCTO: ''
  }

  constructor(private route: ActivatedRoute, private productoService :ProductosService, private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          if(id){            
            this.productoService.getProducto(id).subscribe({
              next: (response) =>{
                this.productoDetails = response;
              }
            });
          }
        }
      }
    )
  }

  updateProducto(){
    if (this.productoDetails && this.productoDetails.iD_PRODUCTO !== undefined) {
      var converter = (this.productoDetails.iD_PRODUCTO).toString();
      this.productoService.updateProducto(converter, this.productoDetails).subscribe({
        next: (response) => {
          this.router.navigate(['productos']);
        }
      })
    }
  }

  deleteProducto(id: number){
    if (id && id !== undefined) {
      var converter = (id).toString();
      this.productoService.deleteProducto(converter).subscribe({
        next: (response) => {
          this.router.navigate(['productos']);
        }
      });
    }
  }

}
