import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import useCustomRouter from './router/Router';

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { routes, isLoading } = useCustomRouter();

  // TODO add spinner
  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
