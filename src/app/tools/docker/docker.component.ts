import { Component, OnInit } from '@angular/core';
import { HttpApiService } from "../../common/services/http-api.service";

import { environment } from "../../../environments/environment";

import { DockerContainerInfo } from "../../common/entities/docker/docker-container-info";
import { DockerSystemInfo } from "../../common/entities/docker/docker-system-info";
import {DockerVersionInfo} from "../../common/entities/docker/docker-version-info";


@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) { }

  dockerContainerInfo = new Array<DockerContainerInfo>();
  dockerSystemInfo = new DockerSystemInfo();
  dockerVersionInfo = new DockerVersionInfo();

  dockerContainerInfoUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiContainersInfo);

  dockerSystemInfoUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiSystemInfo);

  dockerVersionInfoUrl = environment.mediaServerHost
    .concat(environment.dockerWebPort)
    .concat(environment.dockerWebApiVersionInfo);

  cadvisorUrl = environment.mediaServerHost
    .concat(environment.cadvisorPort);

  ngOnInit() {

    this.httpApiService.sendDockerContainersGetRequest(this.dockerContainerInfoUrl)
      .subscribe((data: DockerContainerInfo[])=>{
        this.dockerContainerInfo = data;
      });

    this.httpApiService.sendDockerSystemGetRequest(this.dockerSystemInfoUrl)
      .subscribe((data: DockerSystemInfo)=>{
        this.dockerSystemInfo = data;
      });

    this.httpApiService.sendDockerVersionGetRequest(this.dockerVersionInfoUrl)
      .subscribe((data: DockerVersionInfo)=>{
        this.dockerVersionInfo = data;
      });
  }

}
