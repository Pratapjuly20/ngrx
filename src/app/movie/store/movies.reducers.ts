import { createReducer, on } from '@ngrx/store';
import { getAllMoviesSuccess, saveMovieSuccess, deleteMovieSuccess } from './movies.actions';

const _movieReducer = createReducer(
    {
        movies: null
    },
    on(getAllMoviesSuccess, (state, action) => {
        console.log("get all movies success reducer called", action);
        return {
            ...state,
            movies: action.movies
        }
    }),
    on(saveMovieSuccess, (state, action) => {
        console.log("save movie success action called", action);
        return {
            ...state,
            movies: action.movies
        }
    }),
    on(deleteMovieSuccess, (state, action) => {
        return {
            ...state,
            movies: action.movies
        }
    })
)

export function movieReducer(state, action) {
    return _movieReducer(state, action)
  }