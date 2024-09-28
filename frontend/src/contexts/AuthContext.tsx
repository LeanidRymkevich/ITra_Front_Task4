import { createContext, FC, useEffect, useState } from 'react';

import { AuthContextType, AuthState } from '../types/types';

import { ChildrenOnlyProps } from '../types/interfaces';
import { ERROR_MSGs } from '../types/enums';

import { loadedState } from '../utils/localStorage_util';
import { authWithToken } from '../api/auth';

import {
  LEAVING_AUTH_STATE,
  UNAUTHORIZED_EXIT_DELAY,
} from '../constants/constants';

const initialAuthState: AuthState = {
  ...loadedState,
  isAuthenticating: false,
  errorMsg: null,
};

const initialContext: AuthContextType = {
  authState: initialAuthState,
  setAuthState: () => '',
};

const AuthContext = createContext<AuthContextType>(initialContext);

const AuthContextElement: FC<ChildrenOnlyProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  useEffect(() => {
    if (!authState.authToken) return;

    const fetch = async (token: string): Promise<void> => {
      setAuthState({ ...authState, isAuthenticating: true });
      try {
        await authWithToken(token);

        setAuthState({ ...authState, isAuthenticating: false });
      } catch {
        setAuthState({
          ...authState,
          errorMsg: ERROR_MSGs.UNAUTHORIZED,
        });
        setTimeout((): void => {
          setAuthState(LEAVING_AUTH_STATE);
        }, UNAUTHORIZED_EXIT_DELAY);
      }
    };

    fetch(authState.authToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextElement, AuthContext };
