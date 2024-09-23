import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';

import Fallback from '../components/Fallback/Fallback';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';

import { ROOT_PATH } from '../constants/constants';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useRouter = () => {
  const { authToken } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROOT_PATH} element={<Layout />} errorElement={<Fallback />}>
        {authToken ? privateRoutes : publicRoutes}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return router;
};

export default useRouter;
