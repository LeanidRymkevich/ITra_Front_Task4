import { Dispatch, SetStateAction } from 'react';
import { LOCAL_STORAGE_ITEM_NAME, PAGE_NAMES } from './enums';
import { AdminTableRowData } from './interfaces';

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

type AdminData = Omit<AdminTableRowData, 'checked'>;

type LocalStorageItems = {
  [key in LOCAL_STORAGE_ITEM_NAME]: string | null;
};

type AppContextType = {
  [LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]:
    | LocalStorageItems[LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]
    | null;
  setAuthToken: Dispatch<
    SetStateAction<LocalStorageItems[LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]>
  >;
};

export type { PathsMap, AdminData, LocalStorageItems, AppContextType };
