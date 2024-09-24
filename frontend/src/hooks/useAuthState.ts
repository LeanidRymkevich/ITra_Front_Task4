import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { setRecord } from '../utils/localStorage_util';
import { LOCAL_STORAGE_ITEM_NAME } from '../types/enums';
import { AdminData } from '../types/interfaces';

const useAuthState = () => {
  const { setAuthToken, authToken } = useContext(AuthContext);
  const saveToken = (token: AdminData | null): void => {
    setAuthToken(token);
    setRecord(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN, token);
  };

  return { saveToken, authToken };
};

export default useAuthState;
