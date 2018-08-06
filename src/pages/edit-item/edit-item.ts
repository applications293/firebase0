import { ShopData } from './../../model/shopData';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from './../../providers/data-service/data-service';
//import { ShopData } from '../../model/shopData';
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  data: ShopData = {
    title:'',
    content:''
  };
//title;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
    //this.data = this.navParams.get('data');
    console.log(this.data);
  }

  updateItem(data: ShopData){
    this.dataService.updateItem(data).then(() => {
      this.navCtrl.push('HomePage');
    })
  }

 removeItem(data: ShopData){
   this.dataService.removeItem(data).then(() =>{
     this.navCtrl.setRoot('HomePage');
   })
 }
}
