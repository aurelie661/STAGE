import { Component } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  pokemonInputInfo: any = '';
  dataPokemon: any = '';
  pokemonInfo: any = '';
  pokemonName: any = '';
  dataDescription: any = '';
  descriptionInfo: any = '';
  arrayDescription: Array<any> = [];
  frenchDescriptionTempo: Array<any> = [];
  frenchDescriptionPokemons: Array<any> = [];
  frenchDescriptionPokemonsGo: Array<any> = [];
  pokemonGeneralType: any = '';
  pokemonPictureDefault: any = '';
  pokemonPictureShiny: any = '';

  constructor(
    private pokemonService: PokemonServiceService,
    private routes: Router
  ) {}

  getValue() {
    this.pokemonService.getPokemon(this.pokemonInputInfo).subscribe({
      next: (response) => {
        let dataPokemon = response;
        this.pokemonInfo = dataPokemon;
        for (let i = 0; i < Object.keys(this.pokemonInfo).length - 1; i++) {
          if (this.pokemonInfo.sprites.front_default !== 'null') {
            this.pokemonPictureDefault = this.pokemonInfo.sprites.front_default;
            if (this.pokemonInfo.sprites.front_shiny !== 'null') {
              this.pokemonPictureShiny = this.pokemonInfo.sprites.front_shiny;
            }
          }
        }
        this.pokemonService.getDescription(this.pokemonInputInfo).subscribe({
          next: (response) => {
            let dataDescription = response;
            this.descriptionInfo = dataDescription;

            try {
              for (
                let i = 0;
                i < Object.keys(this.descriptionInfo).length - 1;
                i++
              ) {
                if (this.descriptionInfo.flavor_text_entries) {
                  this.arrayDescription =
                    this.descriptionInfo.flavor_text_entries;
                }
              }
              for (
                let i = 0;
                i < Object.keys(this.arrayDescription).length - 1;
                i++
              ) {
                if (this.arrayDescription[i].language.name === 'fr') {
                  this.frenchDescriptionTempo =
                    this.arrayDescription[i].flavor_text;
                  this.frenchDescriptionPokemons.push(
                    this.frenchDescriptionTempo
                  );
                }
              }

              for (
                let e = 0;
                e < Object.keys(this.descriptionInfo).length - 1;
                e++
              ) {
                if (this.descriptionInfo.genera[e].language.name === 'fr') {
                  this.pokemonGeneralType =
                    this.descriptionInfo.genera[e].genus;
                }
                if (this.descriptionInfo.names[e].language.name === 'fr') {
                  this.pokemonName = this.descriptionInfo.names[e].name;
                }
              }
            } catch {
              console.error('error');
            }
          },
          error: (error) => {
            console.log(
              'Une erreur est survenu dans la récupération de la description!'
            );
          },
        });
      },
      error: (error) => {
        console.log('Une erreur est survenu dans la récupération du pokémon!');
      },
    });
  }

  ngOnInit() {}
}
