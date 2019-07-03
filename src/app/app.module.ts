import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { ContactComponent } from "./contact/contact.component";
import { MapComponent } from "./map/map.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

const routes: Routes = [
  {
    path: "Alone in the Zone",
    component: HomeComponent
  },
  {
    path: "Historia",
    component: HistoryComponent
  },
  {
    path: "Galeria",
    component: GalleryComponent
  },
  {
    path: "Mapa",
    component: MapComponent
  },
  {
    path: "Kontakt",
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    ContactComponent,
    MapComponent,
    GalleryComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAgivBlMwbO5R8kUFgECtTN4U01PrVg21Y"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
