import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { ServarrSystemStatus } from "../entities/servarr-system-status";
import { SabnzbdStatus } from "../entities/sabnzbd-status";
import { DockerSystemInfo } from "../entities/docker/docker-system-info";
import { DockerContainerInfo } from "../entities/docker/docker-container-info";
import { DockerVersionInfo } from "../entities/docker/docker-version-info";
import {DockerContainerDetails} from "../entities/docker/docker-container-details";


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpClient: HttpClient) { }

  public sendServarrGetRequest(apiUrl: string): Observable<ServarrSystemStatus>{
    return this.httpClient.get<ServarrSystemStatus>(apiUrl);
  }

  public sendSabnzbdGetRequest(apiUrl: string): Observable<SabnzbdStatus>{
    return this.httpClient.get<SabnzbdStatus>(apiUrl);
  }

  public sendDockerContainersGetRequest(apiUrl: string): Observable<DockerContainerInfo[]>{
    return this.httpClient.get<DockerContainerInfo[]>(apiUrl);
  }

  public sendDockerSystemGetRequest(apiUrl: string): Observable<DockerSystemInfo>{
    return this.httpClient.get<DockerSystemInfo>(apiUrl);
  }

  public sendDockerVersionGetRequest(apiUrl: string): Observable<DockerVersionInfo>{
    return this.httpClient.get<DockerVersionInfo>(apiUrl);
  }

  public sendDockerContainerDetailsGetRequest(apiUrl: string): Observable<DockerContainerDetails>{
    return this.httpClient.get<DockerContainerDetails>(apiUrl);
  }
}
