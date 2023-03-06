import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  
  constructor(private pokemonService : PokemonServiceService){
    
  };
  
  onKeyUp(event:any) 
  { 
    console.log(event.target.value );
  } 

  ngOnInit(){
    // this.pokemonService.ditPatate();
    this.pokemonService.getPokemon().subscribe(
      data=>{
        console.log(data);
        
      }
    );
  }
  
}
