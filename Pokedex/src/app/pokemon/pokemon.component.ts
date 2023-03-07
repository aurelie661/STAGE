import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemonId:number= 0;

  constructor(private pokemonService : PokemonServiceService){};
  
  getValue(){
    this.pokemonService.getPokemon(this.pokemonId).subscribe({
      next: (response) => {
        console.log(response);     
      },
      error:(error) =>{
        console.log("Une erreur est survenu!");       
      }
    });
    console.log(this.pokemonId);
  }

  ngOnInit(){
    
  }
  
}
