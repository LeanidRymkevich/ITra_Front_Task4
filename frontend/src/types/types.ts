import { PAGE_NAMES } from './enums';

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

export type { PathsMap };
