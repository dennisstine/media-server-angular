import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsComponent } from "./tools.component";
import { PlexComponent } from "./plex/plex.component";
import { SabnzbdComponent } from "./sabnzbd/sabnzbd.component";
import { RadarrComponent } from "./radarr/radarr.component";
import { SonarrComponent } from "./sonarr/sonarr.component";
import { DockerComponent } from "./docker/docker.component";

const routes: Routes = [{
  path: '',
  component: ToolsComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'docker'
  }, {
    path: 'docker',
    component: DockerComponent
  }, {
    path: 'plex',
    component: PlexComponent
  }, {
    path: 'sabnzbd',
    component: SabnzbdComponent
  }, {
    path: 'radarr',
    component: RadarrComponent
  }, {
    path: 'sonarr',
    component: SonarrComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
