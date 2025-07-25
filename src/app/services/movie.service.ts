import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MovieService {
  constructor(private http: HttpClient) {
  }

  getMovies() : Observable<ApiResponse<Movie[]>> {
    return this.http.get<ApiResponse<Movie[]>>("http://localhost:3000/movies");
  }


}


export class Movie {
  public id: bigint;
  public slug: string;
  public title: string;
  public year: bigint;
  public author: string;
  public duration: bigint;
  public genre: string;
  public synopsis: string;
  public cover: string;
  public rating: number;


  constructor(id: bigint, slug: string, title: string, year: bigint, author: string, duration: bigint, genre: string, synopsis: string, cover: string, rating: number) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.year = year;
    this.author = author;
    this.duration = duration;
    this.genre = genre;
    this.synopsis = synopsis;
    this.cover = cover;
    this.rating = rating;
  }

  movies : Movie [] = [];
}

class ApiResponse<T>{
  public code:String ="";
  public message:String ="";
  public data: T;

  constructor(code: String, message: String, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}



