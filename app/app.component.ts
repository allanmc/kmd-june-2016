import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';
import { Result } from './result';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [OmdbService]
})
export class AppComponent implements OnInit {
    results: Result[];
    selectedResult: Result;
    constructor(private omdbService: OmdbService) { }
    getResults() {
        this.omdbService.search().then(results => this.results = results);
    }
    ngOnInit() {
        this.getResults();
    }
    onSelect(result: Result) { this.selectedResult = result; }
}