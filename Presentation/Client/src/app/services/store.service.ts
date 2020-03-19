import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:50234',
      'Access-Control-Allow-Methods': '*',
      // tslint:disable-next-line: max-line-length
      'Access-Control-Allow-Headers':  'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    });
   }

  GetProducts(): Observable<Product[]>  {
    return this.httpClient.get<Product[]>(environment.apiAddress + '/store');
  }

  SaveCart(cart): Observable<Response> | Observable<any> {
    return this.httpClient.post(environment.apiAddress + '/store', JSON.stringify(cart), { headers: this.headers})
      .catch( (err) =>  throwError(err));
  }
}

