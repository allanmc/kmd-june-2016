import { Component, Input } from '@angular/core';
import { Result } from './result';
import { SearchResultComponent } from './searchresult.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { Accordion } from 'primeng/primeng';
import { AccordionTab } from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import { MovieDetailsComponent } from './movie-details.component';
import { OmdbService } from './omdb.service';
import { Inject } from '@angular/core';
import {MovieDetails} from "./moviedetails";

@Component({
    selector: 'search-results',
    templateUrl: 'app/views/searchresults.html',
    directives: [SearchResultComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, Accordion, AccordionTab, Header, MovieDetailsComponent],
    providers: [MdIconRegistry, OmdbService]
})
export class SearchResultsComponent {
    @Input()
    results: Result[];

    constructor(@Inject(OmdbService) public omdbService: OmdbService) { }

    onTabShow(event) {
        var correctParent = this.findCorrectParent(event.originalEvent.target);

        var querySelector = correctParent.querySelector('.imdbID');
        if (querySelector) {
            var imdb = querySelector.id;
            this.omdbService.details(imdb).subscribe(details => this.findByImdbId(imdb, this.results).Details = details);
        } else {
            console.log("Could not find queryselector "+querySelector);
        }

    }

    findCorrectParent(node) {
        var counter  = 0;
        var n = node;
        while (n.nodeName != "p-accordiontab" && counter < 10) {
            counter++;
            n = node.parentNode;
        }
        return n;
    }

    findByImdbId(imdbid: string, detailsList: Result[]): Result {
        for (let details of detailsList) {
            if (details.imdbID == imdbid) return details;
        }
        return null;
    }
} 