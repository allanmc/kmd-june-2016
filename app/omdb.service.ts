import { Inject } from '@angular/core';
import { Result } from './result';
import { MovieDetails } from './moviedetails';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class OmdbService {
    private baseUrl = 'http://www.omdbapi.com/?';
    private searchUrl: string = this.baseUrl+'s=';
    private detailsUrl: string = this.baseUrl+'plot=short&i=';

    constructor(@Inject(Http) public http: Http) {

    }

    search(title): Observable<Result[]> {
        return this.http.get(this.searchUrl + title)
            .map(this.extractSearch)
            .catch(this.handleError);
    }

    details(id): Observable<MovieDetails> {
        return this.http.get(this.detailsUrl+id)
            .map(this.extractDetails)
            .catch(this.handleError);
    }

    private extractSearch(res: Response) {
        let body = res.json();
        return body.Search || [];
    }

    private extractDetails(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
