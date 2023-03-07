import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemonId= 0;
  newPokemonId= 0;

  constructor(private pokemonService : PokemonServiceService){};
  
  onKey(event: any) {
    this.pokemonId = event.target.value;
  }
  
  savePokemon(){
    let idPokemon = this.pokemonId;
    console.log(idPokemon);
  }

  ngOnInit(){
    this.pokemonService.getPokemon(this.pokemonId).subscribe({
      next: (response) => {
        console.log(response);
        this.newPokemonId = this.pokemonId;
        console.log(this.newPokemonId);
        
      
      },
      error:(error) =>{
        console.log("Une erreur est survenu!");
        
      }
    });
  }
  
}
