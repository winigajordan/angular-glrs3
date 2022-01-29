import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeFrontRoutingModule } from './commande-front-routing.module';
import { CommandeFrontComponent } from './commande-front.component';
import { CommandeCardComponent } from './commande-card/commande-card.component';
import { CommandeListByDateComponent } from './commande-list-by-date/commande-list-by-date.component';
import { CommandeAddComponent } from './commande-add/commande-add.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommandeFrontComponent,
    CommandeCardComponent,
    CommandeListByDateComponent,
    CommandeAddComponent
  ],
  imports: [
    CommonModule,
    CommandeFrontRoutingModule,
    RouterModule
  ]
})
export class CommandeFrontModule { }
