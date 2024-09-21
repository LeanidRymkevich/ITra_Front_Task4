import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import useCustomRouter from './router/Router';
import Spinner from './components/Spinner/Spinner';

const App: FC = () => {
  const { routes, isLoading } = useCustomRouter();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
