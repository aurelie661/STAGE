import { Component } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemonInputInfo:any =1000;
  dataPokemon:any ="";
  pokemonInfo:any ="";
  dataDescription:any ="";
  descriptionInfo:any ="";

  constructor(private pokemonService : PokemonServiceService){};
  
  
  getValue(){
    this.pokemonService.getPokemon(this.pokemonInputInfo).subscribe({
      next: (response) => {    
        let dataPokemon = response;
        this.pokemonInfo = dataPokemon;
        console.log(this.pokemonInfo);
        
        this.pokemonService.getDescription(this.pokemonInputInfo).subscribe({
          next: (response) => {
            let dataDescription= response;
            this.descriptionInfo = dataDescription;
            console.log(this.descriptionInfo);
            
          }
        })
      },
      error:(error) =>{
        console.log("Une erreur est survenu!");       
      }
    });
  }

  ngOnInit(){
    
    
  }
}
