import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShopData } from '../../model/shopData';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

   shopListRef = this.myDb.list<ShopData>('ShopList');

  constructor(public myDb: AngularFireDatabase) {
    console.log('Hello DataServicesProvider Provider has loaded..');
    console.log(this.getShopList());
  }

	getShopList(){
    return this.shopListRef;
  }

  addItem(data: ShopData){
    return this.shopListRef.push(data);
  }

  updateItem(data: ShopData){
    return this.shopListRef.update(data.key, data);
  }

  removeItem(data){
    return this.shopListRef(data.key).remove();
  }

  removeItems(id) {
    this.myDb.list('/ShopList/').remove(id);
  }


}
