import { Component, Input } from '@angular/core';
import { Result } from './result';


@Component({
    selector: 'movie-details',
    template:
    `<div><span class="badge">{{movieDetails.imdbID}}</span> {{movieDetails.Title}}</div>`
})

export class MovieDetailsComponent {
    @Input()
    movieDetails: Result;
}