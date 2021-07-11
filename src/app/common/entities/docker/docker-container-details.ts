export class DockerContainerDetails {
  Id: string | undefined;
  Created: string | undefined;
  Path: string | undefined;
  Args: any[] | undefined;
  State: State | undefined;
  Image: string | undefined;
  ResolvConfPath: string | undefined;
  HostnamePath: string | undefined;
  HostsPath: string | undefined;
  LogPath: string | undefined;
  Name: string | undefined;
  RestartCount: number | undefined;
  Driver: string | undefined;
  Platform: string | undefined;
  MountLabel: string | undefined;
  ProcessLabel: string | undefined;
  AppArmorProfile: string | undefined;
  ExecIDs: any | undefined;
  HostConfig: HostConfig | undefined;
  GraphDriver: GraphDriver | undefined;
  Mounts: Mount[] | undefined;
  Config: Config2 | undefined;
  NetworkSettings: NetworkSettings | undefined;
}

export interface State {
  Status: string | undefined;
  Running: boolean | undefined;
  Paused: boolean | undefined;
  Restarting: boolean | undefined;
  OOMKilled: boolean | undefined;
  Dead: boolean | undefined;
  Pid: number | undefined;
  ExitCode: number | undefined;
  Error: string | undefined;
  StartedAt: string | undefined;
  FinishedAt: string | undefined;
}

export interface HostConfig {
  Binds: string[] | undefined;
  ContainerIDFile: string | undefined;
  LogConfig: LogConfig | undefined;
  NetworkMode: string | undefined;
  PortBindings: PortBindings | undefined;
  RestartPolicy: RestartPolicy | undefined;
  AutoRemove: boolean | undefined;
  VolumeDriver: string | undefined;
  VolumesFrom: any[] | undefined;
  CapAdd: any | undefined;
  CapDrop: any | undefined;
  CgroupnsMode: string | undefined;
  Dns: any[] | undefined;
  DnsOptions: any[] | undefined;
  DnsSearch: any[] | undefined;
  ExtraHosts: any | undefined;
  GroupAdd: any | undefined;
  IpcMode: string | undefined;
  Cgroup: string | undefined;
  Links: any | undefined;
  OomScoreAdj: number | undefined;
  PidMode: string | undefined;
  Privileged: boolean | undefined;
  PublishAllPorts: boolean | undefined;
  ReadonlyRootfs: boolean | undefined;
  SecurityOpt: any | undefined;
  UTSMode: string | undefined;
  UsernsMode: string | undefined;
  ShmSize: number | undefined;
  Runtime: string | undefined;
  ConsoleSize: number[] | undefined;
  Isolation: string | undefined;
  CpuShares: number | undefined;
  Memory: number | undefined;
  NanoCpus: number | undefined;
  CgroupParent: string | undefined;
  BlkioWeight: number | undefined;
  BlkioWeightDevice: any | undefined;
  BlkioDeviceReadBps: any | undefined;
  BlkioDeviceWriteBps: any | undefined;
  BlkioDeviceReadIOps: any | undefined;
  BlkioDeviceWriteIOps: any | undefined;
  CpuPeriod: number | undefined;
  CpuQuota: number | undefined;
  CpuRealtimePeriod: number | undefined;
  CpuRealtimeRuntime: number | undefined;
  CpusetCpus: string | undefined;
  CpusetMems: string | undefined;
  Devices: Device[] | undefined;
  DeviceCgroupRules: any | undefined;
  DeviceRequests: any | undefined;
  KernelMemory: number | undefined;
  KernelMemoryTCP: number | undefined;
  MemoryReservation: number | undefined;
  MemorySwap: number | undefined;
  MemorySwappiness: any | undefined;
  OomKillDisable: boolean | undefined;
  PidsLimit: any | undefined;
  Ulimits: any | undefined;
  CpuCount: number | undefined;
  CpuPercent: number | undefined;
  IOMaximumIOps: number | undefined;
  IOMaximumBandwidth: number | undefined;
  MaskedPaths: string[] | undefined;
  ReadonlyPaths: string[] | undefined;
}

export interface LogConfig {
  Type: string | undefined;
  Config: Config | undefined;
}

export interface Config {}

export interface PortBindings {}

export interface RestartPolicy {
  Name: string | undefined;
  MaximumRetryCount: number | undefined;
}

export interface Device {
  PathOnHost: string | undefined;
  PathInContainer: string | undefined;
  CgroupPermissions: string | undefined;
}

export interface GraphDriver {
  Data: Data | undefined;
  Name: string | undefined;
}

export interface Data {
  LowerDir: string | undefined;
  MergedDir: string | undefined;
  UpperDir: string | undefined;
  WorkDir: string | undefined;
}

export interface Mount {
  Type: string | undefined;
  Source: string | undefined;
  Destination: string | undefined;
  Mode: string | undefined;
  RW: boolean | undefined;
  Propagation: string | undefined;
}

export interface Config2 {
  Hostname: string | undefined;
  Domainname: string | undefined;
  User: string | undefined;
  AttachStdin: boolean | undefined;
  AttachStdout: boolean | undefined;
  AttachStderr: boolean | undefined;
  ExposedPorts: ExposedPorts | undefined;
  Tty: boolean | undefined;
  OpenStdin: boolean | undefined;
  StdinOnce: boolean | undefined;
  Env: string[] | undefined;
  Cmd: any | undefined;
  Image: string | undefined;
  Volumes: Volumes | undefined;
  WorkingDir: string | undefined;
  Entrypoint: string[] | undefined;
  OnBuild: any | undefined;
  Labels: Labels | undefined;
}

export interface ExposedPorts {
  "1900/udp": N1900Udp | undefined;
  "3005/tcp": N3005Tcp | undefined;
  "32400/tcp": N32400Tcp | undefined;
  "32410/udp": N32410Udp | undefined;
  "32412/udp": N32412Udp | undefined;
  "32413/udp": N32413Udp | undefined;
  "32414/udp": N32414Udp | undefined;
  "32469/tcp": N32469Tcp | undefined;
  "5353/udp": N5353Udp | undefined;
  "8324/tcp": N8324Tcp | undefined;
}

export interface N1900Udp {}

export interface N3005Tcp {}

export interface N32400Tcp {}

export interface N32410Udp {}

export interface N32412Udp {}

export interface N32413Udp {}

export interface N32414Udp {}

export interface N32469Tcp {}

export interface N5353Udp {}

export interface N8324Tcp {}

export interface Volumes {
  "/config": Config3 | undefined;
  "/data/plex": DataPlex | undefined;
}

export interface Config3 {}

export interface DataPlex {}

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

export interface NetworkSettings {
  Bridge: string | undefined;
  SandboxID: string | undefined;
  HairpinMode: boolean | undefined;
  LinkLocalIPv6Address: string | undefined;
  LinkLocalIPv6PrefixLen: number | undefined;
  Ports: Ports | undefined;
  SandboxKey: string | undefined;
  SecondaryIPAddresses: any | undefined;
  SecondaryIPv6Addresses: any | undefined;
  EndpointID: string | undefined;
  Gateway: string | undefined;
  GlobalIPv6Address: string | undefined;
  GlobalIPv6PrefixLen: number | undefined;
  IPAddress: string | undefined;
  IPPrefixLen: number | undefined;
  IPv6Gateway: string | undefined;
  MacAddress: string | undefined;
  Networks: Networks | undefined;
}

export interface Ports {}

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
