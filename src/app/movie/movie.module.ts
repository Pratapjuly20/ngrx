import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/movies.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movies.effects';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    MovieDashboardComponent,
    MoviesListComponent,
    AddMovieComponent
  ],
  exports: [MovieDashboardComponent]
})
export class MovieModule { }