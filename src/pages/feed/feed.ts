import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider,
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo        : "Paulinho",
    data          : "November 5, 1955",
    descricao     : "Estou criando um app",
    qntd_likes    : 10,
    qntd_comments : 12,
    time_comment  : "11h atrás"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Paulinho";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MoovieProvider: MoovieProvider,
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
      alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.MoovieProvider.getLastestMovies().subscribe(
      data => {
        
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);

      },
      error => {
        console.log(error);
      }
    )
  }

}
