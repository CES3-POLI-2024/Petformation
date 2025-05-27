import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Caluproduct } from '../models/caluproduct';

@Injectable({
  providedIn: 'root'
})
export class CaluproductsService {

baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllCaluproducts(): Observable<Caluproduct[]>{
     return this.http.get<Caluproduct[]>(this.baseApiUrl+'/api/Caluproduct');
  }

  addCaluproductMethod(addCaluproduct: Caluproduct): Observable<Caluproduct>{
    //addCliente.iD_CLIENTE = 0;
    return this.http.post<Caluproduct>(this.baseApiUrl+'/api/Caluproduct', addCaluproduct);
  }

  getCaluproduct(idCaluproduct: string): Observable<Caluproduct>{
    return this.http.get<Caluproduct>(this.baseApiUrl+'/api/Caluproduct/'+ idCaluproduct);
  }

  updateCaluproduct(idCaluproduct: string, updateCaluproductRequest: Caluproduct): Observable<Caluproduct>{
    return this.http.put<Caluproduct>(this.baseApiUrl+'/api/Caluproduct/'+ idCaluproduct, updateCaluproductRequest);
  }

  deleteCaluproduct(idCaluproduct: string): Observable<Caluproduct>{
    return this.http.delete<Caluproduct>(this.baseApiUrl+'/api/Caluproduct/'+ idCaluproduct);
  }

}
