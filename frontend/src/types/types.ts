import { ReactNode } from 'react';
import { PAGE_NAMES } from './enums';

type ChildrenOnlyProps = { children: ReactNode };

type PathsMap = {
  [value in Exclude<PAGE_NAMES, PAGE_NAMES.NOT_FOUND>]: string;
};

export type { ChildrenOnlyProps, PathsMap };
