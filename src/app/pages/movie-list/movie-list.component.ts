import {TranslatePipe} from '@ngx-translate/core';

declare const UIkit: any;

import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    TranslatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  stars = [1, 2, 3, 4, 5];

  movies : any [] = [];

 constructor(private movieService: MovieService) {}

    callApi(){
      this.movieService.getMovies().subscribe({
        next: (json)=>{
          console.log(json)
        // Mettre l'attribut data de notre json dans la liste article
        this.movies = json.data;
      },
      error: err => {}})
    }
  }

