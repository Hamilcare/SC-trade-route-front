import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor(private referentielService: ReferentielService) {}
  bordel;
  isSafe = true;

  tripFound = true;

  trips: OneWayTrip[] = [];

  ngOnInit() {
    console.log(this.stations.length);
    this.bordel = this.referentielService.getObject().subscribe(
      data => {
        this.bordel = data;
        this.setStations();
        this.setMerchandise();
      },
      err => console.log(err),
      () => console.log('done loading referentiel')
    );
  }

  setStations() {
    this.bordel.place.forEach(element => {
      this.stations.push(element);
    });
    this.stations.sort();
  }

  setMerchandise() {
    this.bordel.merchandise.forEach(element => {
      this.merchandises.push(element);
    });
    this.merchandises.sort();
  }

  parseResult(data) {
    this.trips = [];
    data.answers.forEach(element => {
      // because fuck you
      this.trips.push(JSON.parse(JSON.stringify(element)));
    });
    if (data.answers.length === 0) {
      this.tripFound = false;
    } else {
      this.tripFound = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
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

      let safety;
      if (this.isSafe) {
        safety = 'safe';
      }

      console.log(safety);

      this.referentielService
        .getTrip(departure, arrival, safety, maxuec, scu)
        .subscribe(
          data => {
            this.parseResult(data);
          },
          err => console.log(err),
          () => console.log('done loading trip')
        );
    }
  }
}
