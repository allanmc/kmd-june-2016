import { Component, Input } from '@angular/core';
import { Result } from './result';
import { SearchResultComponent } from './searchresult.component';
import { Accordion } from 'primeng/primeng';
import { AccordionTab } from 'primeng/primeng';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/searchresults.html',
    directives: [SearchResultComponent, Accordion, AccordionTab],
})
export class SearchResultsComponent {
    @Input()
    results: Result[];
} 