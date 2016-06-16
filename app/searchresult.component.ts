import { Component, Input } from '@angular/core';
import { Result } from './result';
import { MovieDetailsComponent } from './movie-details.component';

@Component({
    selector: 'search-result',
    template: `
    <movie-details [movieDetails] = "result"></movie-details>
  `,
    directives: [MovieDetailsComponent]
})
export class SearchResultComponent {
    @Input()
    result: Result;
}


