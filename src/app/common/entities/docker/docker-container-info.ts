export class DockerContainerInfo {
  Id: string | undefined;
  Names: string[] | undefined;
  Image: string | undefined;
  ImageID: string | undefined;
  Command: string | undefined;
  Created: number | undefined;
  Ports: any[] | undefined;
  Labels: Labels | undefined;
  State: string | undefined;
  Status: string | undefined;
  HostConfig: HostConfig | undefined;
  NetworkSettings: NetworkSettings | undefined;
  Mounts: Mount[] | undefined;
}

export interface Labels {
  build_version: string | undefined;
  "com.docker.compose.config-hash": string | undefined;
  "com.docker.compose.container-number": string | undefined;
  "com.docker.compose.oneoff": string | undefined;
  "com.docker.compose.project": string | undefined;
  "com.docker.compose.project.config_files": string | undefined;
  "com.docker.compose.project.working_dir": string | undefined;
  "com.docker.compose.service": string | undefined;
  "com.docker.compose.version": string | undefined;
  maintainer: string | undefined;
  "org.opencontainers.image.authors": string | undefined;
  "org.opencontainers.image.created": string | undefined;
  "org.opencontainers.image.description": string | undefined;
  "org.opencontainers.image.documentation": string | undefined;
  "org.opencontainers.image.licenses": string | undefined;
  "org.opencontainers.image.ref.name": string | undefined;
  "org.opencontainers.image.revision": string | undefined;
  "org.opencontainers.image.source": string | undefined;
  "org.opencontainers.image.title": string | undefined;
  "org.opencontainers.image.url": string | undefined;
  "org.opencontainers.image.vendor": string | undefined;
  "org.opencontainers.image.version": string | undefined;
}

export interface HostConfig {
  NetworkMode: string | undefined;
}

export interface NetworkSettings {
  Networks: Networks | undefined;
}

export interface Networks {
  host: Host | undefined;
}

export interface Host {
  IPAMConfig: any | undefined;
  Links: any | undefined;
  Aliases: any | undefined;
  NetworkID: string | undefined;
  EndpointID: string | undefined;
  Gateway: string | undefined;
  IPAddress: string | undefined;
  IPPrefixLen: number | undefined;
  IPv6Gateway: string | undefined;
  GlobalIPv6Address: string | undefined;
  GlobalIPv6PrefixLen: number | undefined;
  MacAddress: string | undefined;
  DriverOpts: any | undefined;
}

export interface Mount {
  Type: string | undefined;
  Source: string | undefined;
  Destination: string | undefined;
  Mode: string | undefined;
  RW: boolean | undefined;
  Propagation: string | undefined;
}
