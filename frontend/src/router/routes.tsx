import { Navigate } from 'react-router-dom';

import AdminsBoard from '../pages/AdminsBoard/AdminsBoard';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

import { PAGE_NAMES } from '../types/enums';

import { PATHS, ROOT_PATH } from '../constants/constants';

import { getRoutesArray } from '../utils/paths_utils';

const privateRoutesMap: Record<string, JSX.Element> = {
  [ROOT_PATH]: <Navigate to={PATHS[PAGE_NAMES.ADMINS_BOARD]} />,
  [PATHS[PAGE_NAMES.SIGN_IN]]: <Navigate to={PATHS[PAGE_NAMES.ADMINS_BOARD]} />,
  [PATHS[PAGE_NAMES.SIGN_UP]]: <Navigate to={PATHS[PAGE_NAMES.ADMINS_BOARD]} />,
  [PATHS[PAGE_NAMES.ADMINS_BOARD]]: <AdminsBoard />,
};

const publicRoutesMap: Record<string, JSX.Element> = {
  [ROOT_PATH]: <Navigate to={PATHS[PAGE_NAMES.SIGN_IN]} />,
  [PATHS[PAGE_NAMES.SIGN_IN]]: <SignIn />,
  [PATHS[PAGE_NAMES.SIGN_UP]]: <SignUp />,
  [PATHS[PAGE_NAMES.ADMINS_BOARD]]: <Navigate to={PATHS[PAGE_NAMES.SIGN_IN]} />,
};

const privateRoutes = getRoutesArray(privateRoutesMap);
const publicRoutes = getRoutesArray(publicRoutesMap);

export { privateRoutes, publicRoutes };
