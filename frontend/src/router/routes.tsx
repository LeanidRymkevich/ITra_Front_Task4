import { Navigate, Route } from 'react-router-dom';

import AdminsBoard from '../pages/AdminsBoard/AdminsBoard';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

import { PAGE_NAMES } from '../types/enums';

import { PATHS, ROOT_PATH } from '../constants/constants';

export const privateRoutes: JSX.Element[] = [
  <Route
    key={'0'}
    path={ROOT_PATH}
    element={<Navigate to={PATHS[PAGE_NAMES.ADMINS_BOARD]!} />}
  />,
  <Route
    key={'1'}
    path={PATHS[PAGE_NAMES.ADMINS_BOARD]}
    element={<AdminsBoard />}
  />,
];

export const publicRoutes: JSX.Element[] = [
  <Route
    key={'0'}
    path={ROOT_PATH}
    element={<Navigate to={PATHS[PAGE_NAMES.SIGN_IN]!} />}
  />,
  <Route key={'1'} path={PATHS[PAGE_NAMES.SIGN_IN]} element={<SignIn />} />,
  <Route key={'2'} path={PATHS[PAGE_NAMES.SIGN_UP]} element={<SignUp />} />,
];
