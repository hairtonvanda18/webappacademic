export enum StorageKey {
  USER_DATA = 'user-data',
  REDIRECT_URL = 'redirect-url'
}

export type TStorageKey = `v${number}-${string}-${StorageKey}`;

export const STORAGE_VERSION = 'v1';
const APP_NAME = 'releases';

export const STORAGE_KEYS: Record<StorageKey, TStorageKey> = {
  [StorageKey.USER_DATA]: `${STORAGE_VERSION}-${APP_NAME}-${StorageKey.USER_DATA}`,
  [StorageKey.REDIRECT_URL]: `${STORAGE_VERSION}-${APP_NAME}-${StorageKey.REDIRECT_URL}`
};
