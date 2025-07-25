declare const UIkit: any;

import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';


@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  stars = [1, 2, 3, 4, 5];

constructor(private movieService: MovieService) {
}

/**
 * Sera appelée via le clique d'un bouton
 */
callApi() {
  this.movieService.getMovies().subscribe({
    next: responseJson => {
      // je vais récupérer dans tout le json uniquement l'attribut data => la liste des films
      // rappel le json actuelle => code, message, data (array movies)
      this.movies = responseJson.data;
    },
    error: error => {}
  });
}
}

