import { Route } from 'react-router-dom';

import { PAGE_NAMES } from '../types/enums';

import { PATHS } from '../constants/constants';

const getPageNameByPath = (path: string): PAGE_NAMES => {
  const result: [string, string] | undefined = Object.entries(PATHS).find(
    (value: [string, string]): boolean => value[1] === path
  );

  return result ? (result[0] as PAGE_NAMES) : PAGE_NAMES.NOT_FOUND;
};

const getRoutesArray = (
  routesMap: Record<string, JSX.Element>
): JSX.Element[] => {
  return Object.entries(routesMap).map(
    ([path, element]: [string, JSX.Element], idx: number) => {
      return <Route key={idx} path={path} element={element} />;
    }
  );
};

export { getPageNameByPath, getRoutesArray };
