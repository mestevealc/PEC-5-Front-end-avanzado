import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../models/pokemon.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  standalone: false,
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService
      .getAllPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons.results));
  }
}
