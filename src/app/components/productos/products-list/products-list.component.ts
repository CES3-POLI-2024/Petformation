import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.productosService.getAllProductos()
    .subscribe({
      next: (productos) => {
        console.log(productos);
        this.productos = productos;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  redirigir() {
    this.router.navigate(['productos/add']);
  }

}
