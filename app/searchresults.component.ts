import { Component, Input } from '@angular/core';
import { Result } from './result';
import { SearchResultComponent } from './searchresult.component';

@Component({
    selector: 'search-results',
    template: `
    <div *ngIf="results">
      <search-result
        *ngFor="let result of results"
        [result]="result" 
        class="result"
        [class.selected]="result === selectedResult"
        (click)="onSelect(result)"
      ></search-result>
    </div>
  `,
    directives: [SearchResultComponent],
})
export class SearchResultsComponent {
    @Input()
    results: Result[];
    selectedResult: Result;

    onSelect(result: Result) { this.selectedResult = result; }
}