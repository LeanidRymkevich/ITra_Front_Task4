import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';

import Fallback from '../components/Fallback/Fallback';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';

import { ROOT_PATH } from '../constants/constants';
import useAuthState from '../hooks/useAuthState';
import { FC } from 'react';

const Router: FC = () => {
  const { authToken } = useAuthState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROOT_PATH}
          element={<Layout />}
          errorElement={<Fallback />}
        >
          {authToken ? privateRoutes : publicRoutes}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
