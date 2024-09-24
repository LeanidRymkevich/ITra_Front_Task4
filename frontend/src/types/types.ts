import { Dispatch, SetStateAction } from 'react';

import { LOCAL_STORAGE_ITEM_NAME, PAGE_NAMES } from './enums';
import { AdminData, AdminsBoardData } from './interfaces';

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

type LocalStorageItems = {
  [key in LOCAL_STORAGE_ITEM_NAME]: AdminData | null;
};

type AppContextType = {
  [LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]:
    | LocalStorageItems[LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]
    | null;
  setAuthToken: Dispatch<
    SetStateAction<LocalStorageItems[LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]>
  >;
};

type AdminsBoardState = Record<string, AdminsBoardData>;

export type { PathsMap, LocalStorageItems, AppContextType, AdminsBoardState };
