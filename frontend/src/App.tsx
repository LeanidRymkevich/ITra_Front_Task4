import { FC } from 'react';

import Router from './router/Router';

import { AuthContextElement } from './contexts/AuthContext';

const App: FC = () => {
  return (
    <AuthContextElement>
      <Router />
    </AuthContextElement>
  );
};

export default App;
