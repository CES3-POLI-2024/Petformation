import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Venta } from '../models/ventas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

baseApiUrl: string = environment.baseApiUrl;

constructor(private http: HttpClient) { }

getAllVentas(): Observable<Venta[]>{
     return this.http.get<Venta[]>(this.baseApiUrl+'/api/Ventas');
  }

  addVentaMethod(addVenta: Venta): Observable<Venta>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Venta>(this.baseApiUrl+'/api/Ventas', addVenta);
  }

  getVenta(idVenta: string): Observable<Venta>{
    return this.http.get<Venta>(this.baseApiUrl+'/api/Ventas/'+ idVenta);
  }

  getVentaTable(idVenta: string): Observable<Venta>{
    return this.http.get<Venta>(this.baseApiUrl+'/api/Ventas/venta/'+ idVenta);
  }

  updateVenta(idVenta: string, updateMascotaRequest: Venta): Observable<Venta>{
    return this.http.put<Venta>(this.baseApiUrl+'/api/Ventas/'+ idVenta, updateMascotaRequest);
  }

  deleteVenta(idVenta: string): Observable<Venta>{
    return this.http.delete<Venta>(this.baseApiUrl+'/api/Ventas/'+ idVenta);
  }

}
