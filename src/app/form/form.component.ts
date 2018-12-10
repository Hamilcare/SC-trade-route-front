import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { ReferentielService } from '../services/referentiel.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  stations = [];
  constructor(private referentielService: ReferentielService) { }

  ngOnInit() {
    this.stations = this.referentielService.getAllStation();
    console.log(this.stations.length);
  }


  onSubmit(form: NgForm) {
    console.log('form submitted');
    const departure = form.value['departure'];
    console.log(departure.name);

    const arrival = form.value['arrival'];
    console.log(arrival.name);

    const scu = form.value['scu'];
    console.log(scu);

    const maxuec = form.value['maxuec'];
    console.log(maxuec);
  }

}
