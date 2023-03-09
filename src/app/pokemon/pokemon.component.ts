import { Component } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemonInputInfo:any =5;
  dataPokemon:any ="";
  pokemonInfo:any ="";
  dataDescription:any ="";
  descriptionInfo:any ="";
  frenchDescriptionPokemon:any ="";
  pokemonGeneralType:any ="";
  pokemonPictureDefault:any;
  pokemonPictureShiny:any;

  constructor(private pokemonService : PokemonServiceService){};
  
  
  getValue(){
    this.pokemonService.getPokemon(this.pokemonInputInfo).subscribe({
      next: (response) => {    
        let dataPokemon = response;
        this.pokemonInfo = dataPokemon;
        
        this.pokemonService.getDescription(this.pokemonInputInfo).subscribe({
          next: (response) => {
            let dataDescription= response;
            this.descriptionInfo = dataDescription;
            // for (let i = 0; i < Object.keys(this.descriptionInfo).length -1; i++) {
              
            //   if(this.descriptionInfo.flavor_text_entries[i].language.name == "fr" || this.descriptionInfo.genera[i].language.name == "fr"){
            //     console.log(this.descriptionInfo[i].flavor_text);
                
            //     const frenchDescriptionPokemon = this.descriptionInfo.flavor_text_entries[i].flavor_text;
            //     const pokemonGeneralType = this.descriptionInfo[i].genus;
            //   }           
            // }
            // for (let i = 0; i < this.pokemonInfo.length -1; i++) {

            //   if (this.pokemonInfo.sprites.front_default  != "null" || this.pokemonInfo.sprites.front_shiny  != "null") {
            //     const pokemonPictureDefault = this.pokemonInfo.sprites.front_default;
            //     const pokemonPictureShiny = this.pokemonInfo.sprites.front_shiny;
            //   }
              
            // }
            console.log(this.descriptionInfo);
            console.log(this.pokemonInfo);
            
            
          },
          error:(error) => {
            console.log("Une erreur est survenu dans la récupération de la description!");
          }
        })
      },
      error:(error) =>{
        console.log("Une erreur est survenu dans la récupération du pokémon!");       
      }
    });
  }

  ngOnInit(){
    
    
  }
}
