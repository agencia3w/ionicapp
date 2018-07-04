import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  private baseApiPath = 'https://api.themoviedb.org/3';
  private apiKey      = '17893c1a650d79618ae5b6dc431f0932';

  getLastestMovies()
  {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key=' + this.apiKey);
  }

}
