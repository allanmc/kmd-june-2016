import { Component, Input } from '@angular/core';
import { Result } from './result';


@Component({
    selector: 'movie-details',
    templateUrl: 'app/views/moviedetails.html'
})

export class MovieDetailsComponent {
    @Input()
    movieDetails: Result;
}