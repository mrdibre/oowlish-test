export interface Storage {
  clear(): void;
  get(key: string): any;
  set(key: string, value: any): void;
  delete(key: string, value: any): void;
}
