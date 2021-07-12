import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpApiService } from "../../common/services/http-api.service";
import { ServarrSystemStatus } from "../../common/entities/servarr-system-status";
import { DockerContainerDetails } from "../../common/entities/docker/docker-container-details";

@Component({
  selector: 'app-radarr',
  templateUrl: './radarr.component.html',
  styleUrls: ['./radarr.component.scss']
})
export class RadarrComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  radarrData = new ServarrSystemStatus();
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

    this.httpApiService.sendServarrGetRequest(this.apiUrl).subscribe((data: ServarrSystemStatus)=>{
      this.radarrData = data;
    });

    this.httpApiService.sendDockerContainerDetailsGetRequest(this.dockerApiUrl).subscribe((data: DockerContainerDetails)=>{
      this.radarrDockerData = data;
    });
  }
}
