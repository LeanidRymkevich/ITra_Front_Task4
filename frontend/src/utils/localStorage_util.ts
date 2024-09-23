import { LOCAL_STORAGE_ITEM_NAME } from '../types/enums';
import { LocalStorageItems } from '../types/types';

const DEFAULT_ITEMS: LocalStorageItems = {
  [LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]: '12345', // TODO null must be by default, but during development may be changed for testing purposes
};

const loadState = (): LocalStorageItems => {
  const state: Record<string, unknown> = DEFAULT_ITEMS;

  Object.keys(DEFAULT_ITEMS).forEach((key: string): void => {
    const value: string | null = localStorage.getItem(key);
    if (value === null) return;

    state[key] = value === 'undefined' ? undefined : JSON.parse(value);
  });

  return state as LocalStorageItems;
};

const storageItems: LocalStorageItems = loadState();

const setRecord = (key: LOCAL_STORAGE_ITEM_NAME, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { storageItems, setRecord };
