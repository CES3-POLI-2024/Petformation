import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cliente } from '../models/clientes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.baseApiUrl+'/api/Clientes');
  }

  addClienteMethod(addCliente: Cliente): Observable<Cliente>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Cliente>(this.baseApiUrl+'/api/Clientes', addCliente);
  }

  getCliente(idCliente: string): Observable<Cliente>{
    return this.http.get<Cliente>(this.baseApiUrl+'/api/Clientes/'+ idCliente);
  }

  updateCliente(idCliente: string, updateClienteRequest: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.baseApiUrl+'/api/Clientes/'+ idCliente, updateClienteRequest);
  }

  deleteCliente(idCliente: string): Observable<Cliente>{
    return this.http.delete<Cliente>(this.baseApiUrl+'/api/Clientes/'+ idCliente);
  }
}
