import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OmdbService } from './omdb.service';
import { Result } from './result';
import { HTTP_PROVIDERS } from '@angular/http';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: 'omdb-search',
    templateUrl: 'app/views/omdbsearch.html',
    directives: [MD_INPUT_DIRECTIVES],
    providers: [OmdbService, HTTP_PROVIDERS]

})
export class OmdbSearchComponent implements OnInit {

    @Output()
    event:EventEmitter<Result[]> = new EventEmitter();

    searchField: String = "1984";

    constructor(private omdbService: OmdbService) { }

    getResults() {
        this.omdbService.search(this.searchField).subscribe(results => this.event.emit(results));
    }
    ngOnInit() {
        this.getResults();
    }

    get searchFieldModel() {
        return this.searchField;
    }

    set searchFieldModel(value) {
        this.searchField = value;
        if (this.searchField && this.searchField.length > 1) {
            this.getResults();
        } else {
            this.event.emit([]);
        }
    }
}


