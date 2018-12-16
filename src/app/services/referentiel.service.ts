import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ReferentielService {

    constructor(private http: HttpClient) {
    }
    actionUrl = 'http://barnab2.tk:24300';
    getObject() {
      return this.http.get(this.actionUrl + '/api/object');
    }

    getTrip(departure, arrival, safety, maxuec, scu) {
      let url = this.actionUrl + '/api/trip?';
      if ( departure ) {
        url += 'departure=' + departure + '&';
      }
      if ( arrival ) {
        url += 'arrival=' + arrival + '&';
      }
      if ( safety ) {
        url += 'safety=' + safety + '&';
      }
      if ( maxuec ) {
        url += 'maxuec=' + maxuec + '&';
      }
      if ( scu ) {
        url += 'scu=' + scu ;
      }
      return this.http.get(url);
    }

}
