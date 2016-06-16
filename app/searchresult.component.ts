import { Component, Input } from '@angular/core';
import { Result } from './result';
@Component({
    selector: 'search-result',
    template: `
    <div><span class="badge">{{result.imdbID}}</span> {{result.Title}}</div>
  `
})
export class SearchResultComponent {
    @Input()
    result: Result;
}


