import { LOCAL_STORAGE_ITEM_NAME } from '../types/enums';
import { LocalStorageItems } from '../types/types';

const DEFAULT_ITEMS: LocalStorageItems = {
  [LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]: null,
  [LOCAL_STORAGE_ITEM_NAME.ADMIN_NAME]: null,
};

const parseRecord = (record: string): unknown => {
  return record === 'undefined' ? undefined : JSON.parse(record);
};

const loadState = (): LocalStorageItems => {
  const state: Record<string, unknown> = DEFAULT_ITEMS;

  Object.keys(DEFAULT_ITEMS).forEach((key: string): void => {
    const value: string | null = localStorage.getItem(key);
    if (value === null) return;

    state[key] = parseRecord(value);
  });

  return state as LocalStorageItems;
};

const loadedState = loadState();

const getItem = (key: LOCAL_STORAGE_ITEM_NAME) => {
  const record: string | null = localStorage.getItem(key);
  if (!record) return record;
  return parseRecord(record) as LocalStorageItems[typeof key];
};

const setRecord = (key: LOCAL_STORAGE_ITEM_NAME, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { loadedState, setRecord, getItem };
