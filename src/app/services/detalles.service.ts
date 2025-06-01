import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalle } from '../models/detalles.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

baseApiUrl: string = environment.baseApiUrl;

constructor(private http: HttpClient) { }

  getAllDetalleVentas(): Observable<Detalle[]>{
     return this.http.get<Detalle[]>(this.baseApiUrl+'/api/Detalles');
  }

  addDetalleVenta(addDetalle: Detalle[]): Observable<Detalle[]>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Detalle[]>(this.baseApiUrl+'/api/Detalles', addDetalle);
  }

  getDetalleVenta(idDetalle: string): Observable<Detalle[]>{
    return this.http.get<Detalle[]>(this.baseApiUrl+'/api/Detalles/'+ idDetalle);
  }

  updateDetalleVenta(idDetalle: string, updateProveedorRequest: Detalle): Observable<Detalle>{
    return this.http.put<Detalle>(this.baseApiUrl+'/api/Detalles/'+ idDetalle, updateProveedorRequest);
  }

  deleteDetalleVenta(idDetalle: string): Observable<Detalle>{
    return this.http.delete<Detalle>(this.baseApiUrl+'/api/Detalles/'+ idDetalle);
  }

}
