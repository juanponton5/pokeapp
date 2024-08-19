,import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemonNames = [
    'pikachu', 'charizard', 'bulbasaur', 'squirtle', 'jigglypuff',
    'eevee', 'mewtwo', 'snorlax', 'gyarados', 'gengar',
    'dragonite', 'mew', 'vaporeon', 'flareon', 'jolteon',
    'articuno', 'zapdos', 'moltres', 'lapras', 'ditto'
  ];

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getMultiplePokemons(this.selectedPokemonNames).subscribe(
      pokemons => this.pokemons = pokemons
    );
  }

  openPokemonDetail(pokemon: Pokemon) {
    this.dialog.open(PokemonDetailComponent, {
      width: '400px',
      data: pokemon
    });
  }
}