export interface Storage {
  clear(): void;
  get(key: string): void;
  set(key: string, value: any): void;
  delete(key: string, value: any): void;
}
