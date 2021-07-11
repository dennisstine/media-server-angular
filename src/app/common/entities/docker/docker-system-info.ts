export class DockerSystemInfo {
  ID: string | undefined;
  Containers: number | undefined;
  ContainersRunning: number | undefined;
  ContainersPaused: number | undefined;
  ContainersStopped: number | undefined;
  Images: number | undefined;
  Driver: string | undefined;
  DriverStatus: string[][] | undefined;
  Plugins: Plugins | undefined;
  MemoryLimit: boolean | undefined;
  SwapLimit: boolean | undefined;
  KernelMemory: boolean | undefined;
  KernelMemoryTCP: boolean | undefined;
  CpuCfsPeriod: boolean | undefined;
  CpuCfsQuota: boolean | undefined;
  CPUShares: boolean | undefined;
  CPUSet: boolean | undefined;
  PidsLimit: boolean | undefined;
  IPv4Forwarding: boolean | undefined;
  BridgeNfIptables: boolean | undefined;
  BridgeNfIp6tables: boolean | undefined;
  Debug: boolean | undefined;
  NFd: number | undefined;
  OomKillDisable: boolean | undefined;
  NGoroutines: number | undefined;
  SystemTime: string | undefined;
  LoggingDriver: string | undefined;
  CgroupDriver: string | undefined;
  CgroupVersion: string | undefined;
  NEventsListener: number | undefined;
  KernelVersion: string | undefined;
  OperatingSystem: string | undefined;
  OSVersion: string | undefined;
  OSType: string | undefined;
  Architecture: string | undefined;
  IndexServerAddress: string | undefined;
  RegistryConfig: RegistryConfig | undefined;
  NCPU: number | undefined;
  MemTotal: number | undefined;
  GenericResources: any | undefined;
  DockerRootDir: string | undefined;
  HttpProxy: string | undefined;
  HttpsProxy: string | undefined;
  NoProxy: string | undefined;
  Name: string | undefined;
  Labels: any[] | undefined;
  ExperimentalBuild: boolean | undefined;
  ServerVersion: string | undefined;
  Runtimes: Runtimes | undefined;
  DefaultRuntime: string | undefined;
  Swarm: Swarm | undefined;
  LiveRestoreEnabled: boolean | undefined;
  Isolation: string | undefined;
  InitBinary: string | undefined;
  ContainerdCommit: ContainerdCommit | undefined;
  RuncCommit: RuncCommit | undefined;
  InitCommit: InitCommit | undefined;
  SecurityOptions: string[] | undefined;
  Warnings: string[] | undefined;
}

export interface Plugins {
  Volume: string[] | undefined;
  Network: string[] | undefined;
  Authorization: any | undefined;
  Log: string[] | undefined;
}

export interface RegistryConfig {
  AllowNondistributableArtifactsCIDRs: any[] | undefined;
  AllowNondistributableArtifactsHostnames: any[] | undefined;
  InsecureRegistryCIDRs: string[] | undefined;
  IndexConfigs: IndexConfigs | undefined;
  Mirrors: any[] | undefined;
}

export interface IndexConfigs {
  "docker.io": DockerIo | undefined;
}

export interface DockerIo {
  Name: string | undefined;
  Mirrors: any[] | undefined;
  Secure: boolean | undefined;
  Official: boolean | undefined;
}

export interface Runtimes {
  "io.containerd.runc.v2": IoContainerdRuncV2 | undefined;
  "io.containerd.runtime.v1.linux": IoContainerdRuntimeV1Linux | undefined;
  runc: Runc | undefined;
}

export interface IoContainerdRuncV2 {
  path: string | undefined;
}

export interface IoContainerdRuntimeV1Linux {
  path: string | undefined;
}

export interface Runc {
  path: string | undefined;
}

export interface Swarm {
  NodeID: string | undefined;
  NodeAddr: string | undefined;
  LocalNodeState: string | undefined;
  ControlAvailable: boolean | undefined;
  Error: string | undefined;
  RemoteManagers: any | undefined;
}

export interface ContainerdCommit {
  ID: string | undefined;
  Expected: string | undefined;
}

export interface RuncCommit {
  ID: string | undefined;
  Expected: string | undefined;
}

export interface InitCommit {
  ID: string | undefined;
  Expected: string | undefined;
}
