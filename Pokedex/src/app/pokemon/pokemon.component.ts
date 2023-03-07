import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  

  constructor(private pokemonService : PokemonServiceService){};

  pokemonId = 0;
  // pokemon = '';

  onKey(event: any) {
    this.pokemonId = event.target.value;
    // this.pokemon = event.target.value;
  }

  savePokemon(){
    console.log(this.pokemonId);
    
  }

  ngOnInit(){
    this.pokemonService.getPokemon().subscribe({
      next: (response) => {
        console.log(response);
        
      
      },
      error:(error) =>{
        console.log("Une erreur est survenu!");
        
      }
      // data=>{
      //   console.log(data);
      // }
    });
  }
  
}
