import { Component, Input } from "@angular/core";
import { Movie } from '../models/movies.model';
import { Store } from '@ngrx/store';
import { deleteMovie } from '../store/movies.actions';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
    @Input() movies: Movie[];

    constructor(private store: Store) {}

    deleteMovie(movieId) {
        this.store.dispatch(deleteMovie({id: movieId}));
    }
}