import { Component, OnInit } from '@angular/core';

import { HttpApiService } from "../../common/services/http-api.service";
import { environment } from "../../../environments/environment";
import { SabnzbdStatus } from "../../common/entities/sabnzbd-status";
import { DockerContainerDetails } from "../../common/entities/docker/docker-container-details";

@Component({
  selector: 'app-sabnzbd',
  templateUrl: './sabnzbd.component.html',
  styleUrls: ['./sabnzbd.component.scss']
})
export class SabnzbdComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  sabnzbdData = new SabnzbdStatus();
  sabnzbdDockerData = new DockerContainerDetails();

  apiUrl = environment.mediaServerHost
    .concat(environment.sabnzbdPort)
    .concat(environment.sabnzbdApi)
    .concat('&apikey=')
    .concat(environment.sabnzbdApiKey);

  dockerApiUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiSabnzbdInfo);

  ngOnInit() {

    this.httpApiService.sendSabnzbdGetRequest(this.apiUrl).subscribe((data: SabnzbdStatus)=>{
      this.sabnzbdData = data;
    });

    this.httpApiService.sendDockerContainerDetailsGetRequest(this.dockerApiUrl).subscribe((data: DockerContainerDetails)=>{
      this.sabnzbdDockerData = data;
    });
  }
}
