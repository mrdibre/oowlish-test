import { Storage } from "data/protocols/storage/storage";
import { LocalStorageAdapter } from "infra/storage/local-storage/local-storage-adapter";

const makeLocalStorageFactory = (): Storage => new LocalStorageAdapter();

export { makeLocalStorageFactory };
