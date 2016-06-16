import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';
import { Result } from './result';
import { HTTP_PROVIDERS } from '@angular/http';

import { SearchResultsComponent } from './searchresults.component';
import { OmdbSearchComponent } from './omdbsearch.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <omdb-search></omdb-search>
    <h2>My Results</h2>
    <search-results [results]="results"></search-results>
    <p>Title: <input type="text" name="title" style="width: 100px" [(ngModel)]="searchField" (keyup.enter)="getResults()"/></p>
  `,
    directives: [SearchResultsComponent, OmdbSearchComponent],
    providers: [OmdbService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    searchField: String = "1984";
    results: Result[] = [];
    selectedResult: Result = new Result();
    constructor(private omdbService: OmdbService) { }
    getResults() {
        this.omdbService.search(this.searchField).subscribe(results => this.results = results);
    }
    ngOnInit() {
        this.getResults();
    }
}