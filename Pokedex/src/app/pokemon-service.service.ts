import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private _httpClient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  getPokemon() {
    let id = 35;
    let url = "https://pokeapi.co/api/v2/pokemon/"+id;
    return this._httpClient.get(url)  ;
  }

  ditPatate() {
    console.log("patate !");
  }
}
