import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor (private http: HttpClient) {}
  
    getAllMovies() {
      return this.http.get('http://localhost:8000/movies');
    }

    saveMovie(movie) {
      return this.http.post('http://localhost:8000/movies', movie);
    }

    deleteMovie(movieId) {
      return this.http.delete(`http://localhost:8000/movies/${movieId}`);
    }
  }