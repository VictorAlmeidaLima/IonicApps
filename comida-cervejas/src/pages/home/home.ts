import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cerveja = '';

  private combinacoes =
    {
      "Pale Ale" : ["Pizza Calabresa", "Churrasco", "Salgadinhos de Pacote"],
      "Lager" : ["Pizza Margerita", "Salgadinhos de Pacote"],
      "Pilsen" : ["Asinha de Frango", "Fettucine Alfredo", "Batata Frita", "Linguiça apimentada"],
      "IPA" : ["Churrasco de picanha", "Torresmo", "Chessbacon", "Feijoada Gorda"],
      "Red Ale" : ["Churrasco", "Frango Assado"],
      "Bock" : ["Costela de porco grelhada", "Lombo de porco assado", "Javali"],
      "Weiss (trigo)" : ["Muqueca", "Peixe Assado", "Ceviche"]
    }


  public cervejasUnicas = Object.keys(this.combinacoes);

  constructor(public navCtrl: NavController) {

  }

  get combinacao() {
    return this.combinacoes[this.cerveja];
  }

}
