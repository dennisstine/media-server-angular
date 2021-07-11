export class DockerVersionInfo {
  Platform: Platform | undefined;
  Components: Component[] | undefined;
  Version: string | undefined;
  ApiVersion: string | undefined;
  MinAPIVersion: string | undefined;
  GitCommit: string | undefined;
  GoVersion: string | undefined;
  Os: string | undefined;
  Arch: string | undefined;
  KernelVersion: string | undefined;
  BuildTime: string | undefined;
}

export interface Platform {
  Name: string | undefined;
}

export interface Component {
  Name: string | undefined;
  Version: string | undefined;
  Details: Details | undefined;
}

export interface Details {
  ApiVersion?: string | undefined;
  Arch?: string | undefined;
  BuildTime?: string | undefined;
  Experimental?: string | undefined;
  GitCommit: string | undefined;
  GoVersion?: string | undefined;
  KernelVersion?: string | undefined;
  MinAPIVersion?: string | undefined;
  Os?: string | undefined;
}
