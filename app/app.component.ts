import { Component } from '@angular/core';
import { Result } from './result';

import { SearchResultsComponent } from './searchresults.component';
import { OmdbSearchComponent } from './omdbsearch.component';
import { OmdbService } from './omdb.service';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <omdb-search (event)="onResults($event)"></omdb-search>
    <h2>My Results</h2>
    <search-results [results]="results"></search-results>
      `,
    directives: [SearchResultsComponent, OmdbSearchComponent],
    providers: [OmdbService, HTTP_PROVIDERS]
})
export class AppComponent {
    results: Result[] = [];
    offset: number = 0;

    onResults(results) {
        if(results) {
            console.log("length = %o", results.length);
            this.offset+=this.results.length;
            this.results = results;
            console.log("this.results = %o", this.results.length);
        }
    }

}