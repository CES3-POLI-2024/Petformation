import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Proveedor } from '../models/proveedores.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllProveedores(): Observable<Proveedor[]>{
     return this.http.get<Proveedor[]>(this.baseApiUrl+'/api/Proveedores');
  }

  addProveedorMethod(addProveedor: Proveedor): Observable<Proveedor>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Proveedor>(this.baseApiUrl+'/api/Proveedores', addProveedor);
  }

  getProveedor(idProveedor: string): Observable<Proveedor>{
    return this.http.get<Proveedor>(this.baseApiUrl+'/api/Proveedores/'+ idProveedor);
  }

  updateProveedor(idProveedor: string, updateProveedorRequest: Proveedor): Observable<Proveedor>{
    return this.http.put<Proveedor>(this.baseApiUrl+'/api/Proveedores/'+ idProveedor, updateProveedorRequest);
  }

  deleteProveedor(idProveedor: string): Observable<Proveedor>{
    return this.http.delete<Proveedor>(this.baseApiUrl+'/api/Proveedores/'+ idProveedor);
  }
}
