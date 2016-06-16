import { Component, Input } from '@angular/core';
import { Result } from './result';
import { MovieDetailsComponent } from './movie-details.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import {Header} from 'primeng/primeng';

@Component({
    selector: 'search-result',
    templateUrl: 'app/views/searchresult.html',
    directives: [MovieDetailsComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, Header]
})
export class SearchResultComponent {
    @Input()
    result: Result;

    onTabShow() {
        console.log("from result");
        this.result = null;
    }
}


