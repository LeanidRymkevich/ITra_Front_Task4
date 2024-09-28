import { Dispatch, SetStateAction } from 'react';

import { LOCAL_STORAGE_ITEM_NAME, PAGE_NAMES } from './enums';
import { AdminData, AdminsBoardData } from './interfaces';

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

type LocalStorageItems = {
  [LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN]: string | null;
  [LOCAL_STORAGE_ITEM_NAME.ADMIN_NAME]: string | null;
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

type AdminAction = (ids: string[]) => Promise<AdminData[]>;

type ManageAdminActionArgs = {
  setIsPending: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Error | null>>;
  setAdminsMap: Dispatch<SetStateAction<AdminsBoardState>>;
  saveToken: (token: AdminData | null) => void;
  action: AdminAction;
};

export type {
  PathsMap,
  LocalStorageItems,
  AppContextType,
  AdminsBoardState,
  ManageAdminActionArgs,
};
