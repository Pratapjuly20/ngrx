import { createSelector } from '@ngrx/store';

const selectMovieState = (state) => state.movies;

export const getAllMoviesSelector = createSelector(
    selectMovieState,
    (state) => state && state.movies
)