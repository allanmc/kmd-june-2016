import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';
import { Result } from './result';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="results">
      <li *ngFor="let result of results"
        [class.selected]="result === selectedResult"
        (click)="onSelect(result)">
        <span class="badge">{{result.imdbID}}</span> {{result.Title}}
      </li>
    </ul>
  `,
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