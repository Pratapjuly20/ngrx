import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../services/movies.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieEffects {
    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ){}

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Movie Dashboard Page] Get All Movies'),
        mergeMap(() => this.moviesService.getAllMovies().pipe(
            map(response => ({type: '[Movie Dashboard Page] Get All Movies Success', movies: response['movies']})),
            catchError(() => EMPTY)
        ))
    ));

    saveMovie$ = createEffect(() => this.actions$.pipe(
        ofType('[Movie Dashboard] Save Movie'),
        mergeMap(action => {
            return this.moviesService.saveMovie(action['movie']).pipe(
            map(response => ({type: '[Movie Dashboard] Save movie Successful', movies: response['movies']})),
            catchError(() => EMPTY)
        )})
    ));

    deleteMovie$ = createEffect(() => this.actions$.pipe(
        ofType('[Movie Dashboard] Delete Movie'),
        mergeMap(action => {
            return this.moviesService.deleteMovie(action['id']).pipe(
                map(response => ({type: '[Movie Dashboard] Delete movie success', movies: response['movies']})),
                catchError(() => EMPTY)
            )
        })
    ))
}