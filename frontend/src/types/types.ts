import { PAGE_NAMES } from './enums';
import { AdminTableRowData } from './interfaces';

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

type AdminData = Omit<AdminTableRowData, 'checked'>;

export type { PathsMap, AdminData };
