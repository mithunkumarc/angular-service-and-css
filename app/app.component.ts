import { Component } from '@angular/core';
import { IProduct } from './product';
import { User } from 'user';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { UserService } from './user.service'; 
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'my-app',
   templateUrl: 'app.component.html',
   providers: [ProductService,UserService], //injectted (services available to this component),
   styleUrls : ['./app.component.css'],
})

export   class   AppComponent  {
   iproducts: IProduct[];
   users: User[];
   constructor(private _product: ProductService,private _user: UserService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);

      this._user.gerUsers().subscribe(users => this.users = users);
   }
}