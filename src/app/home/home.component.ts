import { Component  } from '@angular/core';

import { App } from "../common/interfaces/apps/app";

import appsJson from '../../assets/data/media-server-containers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  apps: App[] = appsJson;
}
