import { Injectable } from '@angular/core';
import { Result } from './result';
import { RESULTS } from './mock-results';
@Injectable()
export class OmdbService {
    search() {
        return Promise.resolve(RESULTS);
    }
}
