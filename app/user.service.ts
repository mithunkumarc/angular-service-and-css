import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from './user';

@Injectable()
export class UserService{
  private _usersUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private _http : Http){}

  gerUsers(): Observable<User[]>{
    console.log('here');
    return this._http.get(this._usersUrl)
    .map((response: Response) => <User[]>response.json())
    .do(data => console.log(JSON.stringify(data)))
  }
}





/*
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
   private _producturl='https://api.myjson.com/bins/asjsb';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
*/