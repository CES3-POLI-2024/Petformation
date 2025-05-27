import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProducto: Producto = {
    iD_PRODUCTO: 0,
    nombrE_PRODUCTO: '',
    tamanO_PRODUCTO: '',
    coloR_PRODUCTO: '',
    contenidO_PRODUCTO: ''
  }

  constructor(private productosService :ProductosService, private router :Router) { }

  ngOnInit(): void {
  }

  addProductoMethod(){
    this.productosService.addProductoMethod(this.addProducto)
    .subscribe({
      next: (producto) => {
        this.router.navigate(['productos'])
      }
    })
  }

}
