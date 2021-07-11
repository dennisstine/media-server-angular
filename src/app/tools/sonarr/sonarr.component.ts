import { Component, OnInit } from '@angular/core';

import { HttpApiService } from "../../common/services/http-api.service";
import { environment } from "../../../environments/environment";
import { SystemStatus } from "../../common/entities/system-status";
import {DockerContainerDetails} from "../../common/entities/docker/docker-container-details";

@Component({
  selector: 'app-sonarr',
  templateUrl: './sonarr.component.html',
  styleUrls: ['./sonarr.component.scss']
})
export class SonarrComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  sonarrData = new SystemStatus();
  sonarrDockerData = new DockerContainerDetails();

  apiUrl = environment.mediaServerHost
    .concat(environment.sonarrPort)
    .concat(environment.radarrSonarrApi)
    .concat('?apiKey=')
    .concat(environment.sonarrApiKey);

  dockerApiUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiSonarrInfo);

  ngOnInit() {

    this.httpApiService.sendRadarrSonarrGetRequest(this.apiUrl).subscribe((data: SystemStatus)=>{
      this.sonarrData = data;
    });

    this.httpApiService.sendDockerContainerDetailsGetRequest(this.dockerApiUrl).subscribe((data: DockerContainerDetails)=>{
      this.sonarrDockerData = data;
    });
  }
}
