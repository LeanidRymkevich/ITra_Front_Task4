import { ReactNode } from 'react';
import { PAGE_NAMES } from './enums';

type ChildrenOnlyProps = { children: ReactNode };

type PathsMap = {
  [value in PAGE_NAMES]?: string;
};

export type { ChildrenOnlyProps, PathsMap };
