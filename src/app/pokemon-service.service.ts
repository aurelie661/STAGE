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
  
  getPokemon(info : any) {
    let url = "https://pokeapi.co/api/v2/pokemon/"+info;
    return this._httpClient.get(url)  ;
  }

  getDescription(description: any){
    let url = "https://pokeapi.co/api/v2/pokemon-species/"+description;
    return this._httpClient.get(url)  ;
  }

  getHabitat(habitat: any){
    let url = "https://pokeapi.co/api/v2/pokemon-habitat/"+habitat;
    return this._httpClient.get(url)  ;
  }
}
