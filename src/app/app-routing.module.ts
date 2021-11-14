import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';
import { PageconservationComponent } from './page/pageconservation/pageconservation.component';


const routes: Routes = [
  { path: 'listerecettes', component: ListeRecetteComponent },
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'pageconservation', component: PageconservationComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AccueilComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
