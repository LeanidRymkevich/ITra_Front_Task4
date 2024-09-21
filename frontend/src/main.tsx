import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.scss';

import App from './App';

import launchBootstrapJS from './utils/bootstrap_util';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

launchBootstrapJS();
