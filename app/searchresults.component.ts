import { Component, Input } from '@angular/core';
import { Result } from './result';
import { SearchResultComponent } from './searchresult.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/searchresults.html',
    directives: [SearchResultComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class SearchResultsComponent {
    @Input()
    results: Result[];
} 