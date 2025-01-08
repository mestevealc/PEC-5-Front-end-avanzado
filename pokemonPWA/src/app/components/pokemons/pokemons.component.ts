import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../models/pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  standalone: false,
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  view: string = 'cards';

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemonsService.getAllPokemons().subscribe((response) => {
      this.pokemons = response.results;
      this.loading = false;
    });
  }

  setView(view: string): void {
    this.view = view;
  }

  navigateToDetail(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }
}
