import { Component } from '@angular/core';
import { Result } from './result';

import { SearchResultsComponent } from './searchresults.component';
import { OmdbSearchComponent } from './omdbsearch.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <omdb-search (event)="onResults($event)"></omdb-search>
    <h2>My Results</h2>
    <search-results [results]="results"></search-results>
      `,
    directives: [SearchResultsComponent, OmdbSearchComponent],
})
export class AppComponent {
    results: Result[] = [];

    onResults(results) {
        this.results = results;
    }

}