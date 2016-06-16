import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';
import { Result } from './result';
import { SearchResultsComponent } from './searchresults.component';
import { OmdbSearchComponent } from './omdbsearch.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <omdb-search></omdb-search>
    <h2>My Results</h2>
    <search-results [results]="results"></search-results>
  `,
    directives: [SearchResultsComponent, OmdbSearchComponent],
    providers: [OmdbService]
})
export class AppComponent implements OnInit {
    results: Result[];
    constructor(private omdbService: OmdbService) { }
    getResults() {
        this.omdbService.search().then(results => this.results = results);
    }
    ngOnInit() {
        this.getResults();
    }
}