import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  standalone: false,
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | null = null;
  details: boolean = false;

  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name')!;
    console.log('el name es', name);

    this.pokemonsService.getPokemonByName(name).subscribe((pokemon) => {
      if (!pokemon) {
        this.router.navigateByUrl('/');
      }

      this.pokemon = pokemon;
      console.log('pokemon ', this.pokemon);
    });
  }

  moreDetails(): void {
    this.details = !this.details;
  }
}
