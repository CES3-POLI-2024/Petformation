import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Mascota } from '../models/mascotas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllMascotas(): Observable<Mascota[]>{
     return this.http.get<Mascota[]>(this.baseApiUrl+'/api/Mascotas');
  }

  addMascotaMethod(addMascota: Mascota): Observable<Mascota>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Mascota>(this.baseApiUrl+'/api/Mascotas', addMascota);
  }

  getMascota(idCliente: string): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(this.baseApiUrl+'/api/Mascotas/'+ idCliente);
  }

  getMascotaMascoTable(idMascota: string): Observable<Mascota>{
    return this.http.get<Mascota>(this.baseApiUrl+'/api/Mascotas/mascota/'+ idMascota);
  }

  updateMascota(idMascota: string, updateMascotaRequest: Mascota): Observable<Mascota>{
    return this.http.put<Mascota>(this.baseApiUrl+'/api/Mascotas/'+ idMascota, updateMascotaRequest);
  }

  deleteMascota(idMascota: string): Observable<Mascota>{
    return this.http.delete<Mascota>(this.baseApiUrl+'/api/Mascotas/'+ idMascota);
  }

}
