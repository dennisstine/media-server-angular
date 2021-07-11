import { Component, OnInit } from '@angular/core';

import { HttpApiService } from "../../common/services/http-api.service";
import { DockerContainerDetails } from "../../common/entities/docker/docker-container-details";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss']
})
export class PlexComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  plexData = new DockerContainerDetails();

  dockerApiUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiPlexInfo);

  ngOnInit() {

    this.httpApiService.sendDockerContainerDetailsGetRequest(this.dockerApiUrl).subscribe((data: DockerContainerDetails)=>{
      this.plexData = data;
    });
  }
}
