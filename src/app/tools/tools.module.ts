import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NgxJsonViewerModule } from "ngx-json-viewer";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";

import { ToolsRoutingModule } from "./tools-routing.module";
import { ToolsComponent } from './tools.component';
import { PlexComponent } from './plex/plex.component';
import { SabnzbdComponent } from './sabnzbd/sabnzbd.component';
import { SonarrComponent } from './sonarr/sonarr.component';
import { RadarrComponent } from './radarr/radarr.component';
import { DockerComponent } from './docker/docker.component';

import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faAngleRight,
  faDownload,
  faExternalLinkAlt,
  faFilm,
  faTachometerAlt,
  faTicketAlt,
  faTv
} from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    ToolsComponent,
    PlexComponent,
    SabnzbdComponent,
    SonarrComponent,
    RadarrComponent,
    DockerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxJsonViewerModule,
    ToolsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    FontAwesomeModule
  ]
})
export class ToolsModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faAngleRight);
    library.addIcons(faDocker);
    library.addIcons(faDownload);
    library.addIcons(faExternalLinkAlt);
    library.addIcons(faFilm);
    library.addIcons(faTachometerAlt);
    library.addIcons(faTicketAlt);
    library.addIcons(faTv);
  }
}
