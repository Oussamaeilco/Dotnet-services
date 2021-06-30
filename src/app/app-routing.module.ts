import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  //  { path: 'accueil', component: AccueilComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'nos-services', component: NosServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'join-us', component: JoinUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
