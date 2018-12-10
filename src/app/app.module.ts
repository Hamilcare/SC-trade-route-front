import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ReferentielService } from './services/referentiel.service';

const appRoutes: Routes = [
  {path: '', component: FormComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ReferentielService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
