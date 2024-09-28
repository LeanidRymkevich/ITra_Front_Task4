import { createContext, FC, useEffect, useState } from 'react';

import { AuthContextType, AuthState } from '../types/types';

import { loadedState } from '../utils/localStorage_util';
import { ChildrenOnlyProps } from '../types/interfaces';
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
      const resp = await authWithToken(token);

      const { error } = resp;
      if (error) {
        setAuthState({
          ...authState,
          errorMsg: error,
        });
        setTimeout((): void => {
          setAuthState(LEAVING_AUTH_STATE);
        }, UNAUTHORIZED_EXIT_DELAY);
      } else {
        setAuthState({ ...authState, isAuthenticating: false });
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
