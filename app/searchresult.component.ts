import { Component, Input } from '@angular/core';
import { Result } from './result';
import { MovieDetailsComponent } from './movie-details.component';

@Component({
    selector: 'search-result',
    templateUrl: 'app/views/searchresult.html',
    directives: [MovieDetailsComponent]
})
export class SearchResultComponent {
    @Input()
    result: Result;
}


