import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../components/models/pokemon.interface';
import { Observable } from 'rxjs';
import { ApiPokemon } from '../components/models/apiPokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<ApiPokemon> {
    return this.http.get<ApiPokemon>(
      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    );
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
