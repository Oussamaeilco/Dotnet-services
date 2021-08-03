import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BanniereComponent } from './accueil/banniere/banniere.component';
import { ListeServiceComponent } from './accueil/liste-service/liste-service.component';
import { AboutComponent } from './accueil/about/about.component';
import { TemoignageComponent } from './accueil/temoignage/temoignage.component';
import { ContactComponent } from './accueil/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceItemComponent } from './accueil/liste-service/service-item/service-item.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ValeurComponent } from './about-us/valeur/valeur.component';
import { OneServiceComponent } from './nos-services/one-service/one-service.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './contact-us/map/map.component';
import { InfoContactComponent } from './contact-us/info-contact/info-contact.component';
import { JoinFormComponent } from './join-us/join-form/join-form.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { UserPanelComponent } from './admin/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BanniereComponent,
    ListeServiceComponent,
    AboutComponent,
    TemoignageComponent,
    ContactComponent,
    FooterComponent,
    AboutUsComponent,
    NosServicesComponent,
    ContactUsComponent,
    JoinUsComponent,
    ServiceItemComponent,
    ScrollToTopComponent,
    ValeurComponent,
    OneServiceComponent,
    ContactFormComponent,
    MapComponent,
    InfoContactComponent,
    JoinFormComponent,
    AdminComponent,
    LoginComponent,
    UserPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
