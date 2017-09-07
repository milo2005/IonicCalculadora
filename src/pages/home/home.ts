import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OperadorProvider } from '../../providers/operador/operador';
import { HistorialPage } from '../historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  num1: string;
  num2: string;
  res = 0;

  constructor(public navCtrl: NavController, public service: OperadorProvider) {

  }

  operar(index: number) {
    let n1 = parseInt(this.num1);
    let n2 = parseInt(this.num2);
    this.res = this.service.operar(index, n1, n2);
  }

  goToLog() {
    this.navCtrl.push(HistorialPage);
  }

}
