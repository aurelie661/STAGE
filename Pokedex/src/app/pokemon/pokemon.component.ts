import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'pokemon-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemonId:number= 1;
  data:string="";
  pokemonInfo:any ="";

  constructor(private pokemonService : PokemonServiceService){};
  
  getValue(){
    this.pokemonService.getPokemon(this.pokemonId).subscribe({
      next: (response) => {    
        let data = response;
        this.pokemonInfo = data;
        console.log(this.pokemonInfo.name); 
        console.log(data);
        
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
