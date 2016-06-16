import { Component, Input } from '@angular/core';
import { Result } from './result';
import { SearchResultComponent } from './searchresult.component';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/searchresults.html',
    directives: [SearchResultComponent],
})
export class SearchResultsComponent {
    @Input()
    results: Result[];
    selectedResult: Result;

    onSelect(result: Result) { this.selectedResult = result; }
} 