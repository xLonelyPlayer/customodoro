export interface Cycle {
  order: number;
  id: string;
  label: string;
  duration: number;
  active: boolean;
}

export interface AlternateCycleOptions {
  notify?: boolean;
  sound?: boolean;
}
