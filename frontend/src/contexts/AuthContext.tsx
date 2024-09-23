import { createContext, FC, useState } from 'react';

import { AppContextType } from '../types/types';

import { storageItems } from '../utils/localStorage_util';
import { ChildrenOnlyProps } from '../types/interfaces';
import { LOCAL_STORAGE_ITEM_NAME } from '../types/enums';

const initialContext: AppContextType = {
  authToken: storageItems[LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN],
  setAuthToken: () => '',
};

const AuthContext = createContext<AppContextType>(initialContext);

const AuthContextElement: FC<ChildrenOnlyProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState(initialContext.authToken);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextElement, AuthContext };
