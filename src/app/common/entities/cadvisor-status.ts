export class CAdvisorStatus {
  name: string | undefined;
  subcontainers: Subcontainer[] | undefined;
  spec: Spec | undefined;
  stats: Stat[] | undefined;
}

export interface Subcontainer {
  name: string;
}

export interface Spec {
  creation_time: string;
  has_cpu: boolean;
  cpu: Cpu;
  has_memory: boolean;
  memory: Memory;
  has_network: boolean;
  has_filesystem: boolean;
  has_diskio: boolean;
  has_custom_metrics: boolean;
}

export interface Cpu {
  limit: number;
  max_limit: number;
  mask: string;
  period: number;
}

export interface Memory {
  limit: number;
  reservation: number;
  swap_limit: number;
}

export interface Stat {
  timestamp: string;
  cpu: Cpu2;
  diskio: Diskio;
  memory: Memory2;
  network: Network;
  task_stats: TaskStats;
  processes: Processes;
}

export interface Cpu2 {
  usage: Usage;
  cfs: Cfs;
  schedstat: Schedstat;
  load_average: number;
}

export interface Usage {
  total: number;
  per_cpu_usage: number[]
  user: number;
  system: number;
}

export interface Cfs {
  periods: number;
  throttled_periods: number;
  throttled_time: number;
}

export interface Schedstat {
  run_time: number;
  runqueue_time: number;
  run_periods: number;
}

export interface Diskio {
  io_service_bytes: IoServiceByte[]
  io_serviced: IoServiced[]
}

export interface IoServiceByte {
  device: string;
  major: number;
  minor: number;
  stats: Stats;
}

export interface Stats {
  Async: number;
  Discard: number;
  Read: number;
  Sync: number;
  Total: number;
  Write: number;
}

export interface IoServiced {
  device: string;
  major: number;
  minor: number;
  stats: Stats2;
}

export interface Stats2 {
  Async: number;
  Discard: number;
  Read: number;
  Sync: number;
  Total: number;
  Write: number;
}

export interface Memory2 {
  usage: number;
  max_usage: number;
  cache: number;
  rss: number;
  swap: number;
  mapped_file: number;
  working_set: number;
  failcnt: number;
  container_data: ContainerData;
  hierarchical_data: HierarchicalData;
}

export interface ContainerData {
  pgfault: number;
  pgmajfault: number;
}

export interface HierarchicalData {
  pgfault: number;
  pgmajfault: number;
}

export interface Network {
  name: string;
  rx_bytes: number;
  rx_packets: number;
  rx_errors: number;
  rx_dropped: number;
  tx_bytes: number;
  tx_packets: number;
  tx_errors: number;
  tx_dropped: number;
  tcp: Tcp;
  tcp6: Tcp6;
  udp: Udp;
  udp6: Udp6;
}

export interface Tcp {
  Established: number;
  SynSent: number;
  SynRecv: number;
  FinWait1: number;
  FinWait2: number;
  TimeWait: number;
  Close: number;
  CloseWait: number;
  LastAck: number;
  Listen: number;
  Closing: number;
}

export interface Tcp6 {
  Established: number;
  SynSent: number;
  SynRecv: number;
  FinWait1: number;
  FinWait2: number;
  TimeWait: number;
  Close: number;
  CloseWait: number;
  LastAck: number;
  Listen: number;
  Closing: number;
}

export interface Udp {
  Listen: number;
  Dropped: number;
  RxQueued: number;
  TxQueued: number;
}

export interface Udp6 {
  Listen: number;
  Dropped: number;
  RxQueued: number;
  TxQueued: number;
}

export interface TaskStats {
  nr_sleeping: number;
  nr_running: number;
  nr_stopped: number;
  nr_uninterruptible: number;
  nr_io_wait: number;
}

export interface Processes {
  process_count: number;
  fd_count: number;
}
