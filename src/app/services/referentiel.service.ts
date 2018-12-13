import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ReferentielService {

    constructor(private http: HttpClient) {
    }
    actionUrl = 'http://127.0.0.1:4300';
    getObject() {
      return this.http.get(this.actionUrl + '/api/object');
    }

    getTrip(departure, arrival, maxuec, scu) {
      let url = this.actionUrl + '/api/trip?';
      if ( departure ) {
        url += 'departure=' + departure + '&';
      }
      if ( arrival ) {
        url += 'arrival=' + arrival + '&';
      }
      if ( maxuec ) {
        url += 'maxuec=' + maxuec + '&';
      }
      if ( scu ) {
        url += 'scu=' + scu ;
      }
      console.log(url);
      return this.http.get(url);
    }

}
