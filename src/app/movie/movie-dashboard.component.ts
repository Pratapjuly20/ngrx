import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './models/movies.model';
import { getAllMoviesSelector } from './store/movies.selectors';
import { filter } from 'rxjs/operators';
import { getAllMovies } from './store/movies.actions';

@Component({
    selector: 'movie-dashboard',
    templateUrl: './movie-dashboard.component.html',
    styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit{
  movies$: Observable<Movie>;
  movies: any;

  constructor(private store: Store) {} 
  
  ngOnInit() {
      this.store.dispatch(getAllMovies({}));
      this.movies$ = this.store.select(getAllMoviesSelector);
      this.movies$.pipe(
        filter(movies => !!movies)
      ).subscribe(res => {
        this.movies = res;
      })
  }
}