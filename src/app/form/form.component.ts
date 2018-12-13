import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { ReferentielService } from '../services/referentiel.service';
import { OneWayTrip } from '../model/one-way-trip.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  stations: String[] = [];
  merchandises: String[] = [];
  constructor(private referentielService: ReferentielService) { }
  bordel;

  trips: OneWayTrip[] = [];

  ngOnInit() {
    console.log(this.stations.length);
    this.bordel = this.referentielService.getObject().subscribe(
      data => {this.bordel = data ;
         // console.log(JSON.stringify(this.bordel));
          this.setStations();
          this.setMerchandise();
        },
      err => console.log(err),
      () => console.log('done loading referentiel')
    );
  }

  setStations() {
    this.bordel.place.forEach(element => {
      this.stations.push(element) ;
    });
    this.stations.sort();
  }

  setMerchandise() {
    this.bordel.merchandise.forEach(element => {
      this.merchandises.push(element) ;
    });
    this.merchandises.sort();
  }

  parseResult(data) {
    this.trips = [];
   data.answers.forEach(element => {
     // because fuck you
      this.trips.push(JSON.parse(JSON.stringify(element))) ;
    });
  }

  onSubmit(form: NgForm) {
    console.log('form submitted');
    console.log(form);
    const departure = form.value['departure'];
    console.log(departure);

    const arrival = form.value['arrival'];
    console.log(arrival);

    const scu = form.value['scu'];
    console.log(scu);

    const maxuec = form.value['maxuec'];
    console.log(maxuec);
    this.referentielService.getTrip(departure, arrival, maxuec, scu).subscribe(
      data => {
                this.parseResult( data ); },
      err => console.log(err),
      () => console.log('done loading trip')
    );
  }





}
