import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { saveMovie } from '../store/movies.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
    movieForm = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
    });

    constructor(private store: Store){}

    onSubmit() {
        const payload = {
            movie: {
                name: this.movieForm.controls['name'].value,
                description: this.movieForm.controls['description'].value
            }
        }
        this.store.dispatch(saveMovie(payload));
    }
}