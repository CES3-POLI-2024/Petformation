import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Producto } from '../models/productos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseApiUrl: string = environment.baseApiUrl;

constructor(private http: HttpClient) {}

  getAllProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseApiUrl+'/api/Productos');
  }

  addProductoMethod(addProducto: Producto): Observable<Producto>{
  //addCliente.iD_CLIENTE = 0;
  return this.http.post<Producto>(this.baseApiUrl+'/api/Productos', addProducto);
  }

  getProducto(idProducto: string): Observable<Producto>{
  return this.http.get<Producto>(this.baseApiUrl+'/api/Productos/'+ idProducto);
  }

  updateProducto(idProducto: string, updateClienteRequest: Producto): Observable<Producto>{
  return this.http.put<Producto>(this.baseApiUrl+'/api/Productos/'+ idProducto, updateClienteRequest);
  }

  deleteProducto(idProducto: string): Observable<Producto>{
  return this.http.delete<Producto>(this.baseApiUrl+'/api/Productos/'+ idProducto);
  }

}
