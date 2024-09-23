import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import useRouter from './router/Router';

import { AuthContextElement } from './contexts/AuthContext';

const App: FC = () => {
  const router = useRouter();

  return (
    <AuthContextElement>
      <RouterProvider router={router} />
    </AuthContextElement>
  );
};

export default App;
