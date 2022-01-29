import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeAddComponent } from './commande-add/commande-add.component';
import { CommandeCardComponent } from './commande-card/commande-card.component';
import { CommandeFrontComponent } from './commande-front.component';
import { CommandeListByDateComponent } from './commande-list-by-date/commande-list-by-date.component';

const routes: Routes = [{ path: '', component: CommandeFrontComponent },
                        { path: 'card', component: CommandeCardComponent },
                { path: 'date', component: CommandeListByDateComponent },
                { path: 'add', component: CommandeAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeFrontRoutingModule { }
