import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopData } from '../../model/shopData';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  data: ShopData = {
    title:'',
    content:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addItem(data: ShopData){
    this.dataService.addItem(data).then(ref => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
