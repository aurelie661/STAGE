import { Component } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemonInputInfo:any =5;
  data:any ="";
  pokemonInfo:any ="";

  constructor(private pokemonService : PokemonServiceService){};
  
  getValue(){
    this.pokemonService.getPokemon(this.pokemonInputInfo).subscribe({
      next: (response) => {    
        let data = response;
        this.pokemonInfo = data;
        
      },
      error:(error) =>{
        console.log("Une erreur est survenu!");       
      }
    });
  }

  ngOnInit(){
    
    
  }
}
