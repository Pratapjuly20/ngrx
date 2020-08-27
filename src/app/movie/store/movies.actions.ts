import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movies.model'

export const getAllMovies = createAction(
    '[Movie Dashboard Page] Get All Movies',
    props<{}>()
);

export const getAllMoviesSuccess = createAction(
    '[Movie Dashboard Page] Get All Movies Success',
    props<{movies: Array<Movie>}>()
);

export const saveMovie = createAction(
    '[Movie Dashboard] Save Movie',
    props<{movie: Movie}>()
);

export const saveMovieSuccess = createAction(
    '[Movie Dashboard] Save movie Successful',
    props<{movies: Array<Movie>}>()
);

export const deleteMovie = createAction(
    '[Movie Dashboard] Delete Movie',
    props<{id: string}>()
);

export const deleteMovieSuccess = createAction(
    '[Movie Dashboard] Delete movie success',
    props<{movies: Array<Movie>}>()
)