import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperadorProvider } from '../../providers/operador/operador';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  log:number[];

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service:OperadorProvider
  ) {

    this.log = service.log;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

}
