import { Component } from '@angular/core';
import { Tab } from "../common/interfaces/tabs/tab";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  tabs: Tab[] = [{
    label: 'Docker',
    route: 'docker',
    faIcon: 'docker',
    faPrefix: 'fab'
  }, {
    label: 'Plex',
    route: 'plex',
    faIcon: 'ticket-alt',
    faPrefix: 'fas'
  }, {
    label: 'Radarr',
    route: 'radarr',
    faIcon: 'film',
    faPrefix: 'fas'
  }, {
    label: 'Sonarr',
    route: 'sonarr',
    faIcon: 'tv',
    faPrefix: 'fas'
  }, {
    label: 'SABnzbd',
    route: 'sabnzbd',
    faIcon: 'download',
    faPrefix: 'fas'
  }];

  activeLink = this.tabs[0];
}
