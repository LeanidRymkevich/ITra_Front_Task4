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

const useCustomRouter = () => {
  const [user, isLoading] = ['user', false]; // some way to get authentication state

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROOT_PATH} element={<Layout />} errorElement={<Fallback />}>
        {user ? privateRoutes : publicRoutes}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return { routes, isLoading };
};

export default useCustomRouter;
