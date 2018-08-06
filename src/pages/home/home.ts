import { EditItemPage } from './../edit-item/edit-item';
import { ShopData } from './../../model/shopData';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Rx';

import { DataServiceProvider } from './../../providers/data-service/data-service';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shopList: Observable<ShopData[]>;//Observable<ShopData[]>
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: DataServiceProvider) {

    this.shopList = this.serviceProvider.getShopList()
      .snapshotChanges()
      .pipe(
        map(
          changes =>
            changes.map(res => ({
              key: res.payload.key, ...res.payload.val()
            }))
        )
      );

   
  }

  ionViewDidLoad() {
    console.log('HomePage has loaded...');
  }

  next() {
    this.navCtrl.push('AddItemPage');
  }

  updateItem(data: ShopData) {

    this.navCtrl.push('EditItemPage', { val: data });

  }
  

  removeItem(i) {
    var database = firebase.database();
    database.ref('/ShopList/'+i.key).remove();

  }
}
