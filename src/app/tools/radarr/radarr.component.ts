import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpApiService } from "../../common/services/http-api.service";
import { SystemStatus } from "../../common/entities/system-status";
import { DockerContainerDetails } from "../../common/entities/docker/docker-container-details";

@Component({
  selector: 'app-radarr',
  templateUrl: './radarr.component.html',
  styleUrls: ['./radarr.component.scss']
})
export class RadarrComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  radarrData = new SystemStatus();
  radarrDockerData = new DockerContainerDetails();

  apiUrl = environment.mediaServerHost
    .concat(environment.radarrPort)
    .concat(environment.radarrSonarrApi)
    .concat('?apiKey=')
    .concat(environment.radarrApiKey);

  dockerApiUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiRadarrInfo);

  ngOnInit() {

    this.httpApiService.sendRadarrSonarrGetRequest(this.apiUrl).subscribe((data: SystemStatus)=>{
      this.radarrData = data;
    });

    this.httpApiService.sendDockerContainerDetailsGetRequest(this.dockerApiUrl).subscribe((data: DockerContainerDetails)=>{
      this.radarrDockerData = data;
    });
  }
}
