import { useContext } from 'react';

import { LOCAL_STORAGE_ITEM_NAME } from '../types/enums';
import { AdminData, ServerResponse } from '../types/interfaces';

import { AuthContext } from '../contexts/AuthContext';

import { setRecord } from '../utils/localStorage_util';

import {
  LEAVING_AUTH_STATE,
  UNAUTHORIZED_EXIT_DELAY,
} from '../constants/constants';

const useAuthState = () => {
  const { setAuthState, authState } = useContext(AuthContext);

  const getAdminsAccess = async (
    cb: (data: FormData) => Promise<ServerResponse>,
    formData: FormData
  ): Promise<void> => {
    setAuthState({ ...authState, isAuthenticating: true });

    try {
      const { data, accessToken } = await cb(formData);

      const { firstName, lastName } = data as AdminData;
      const adminName = `${firstName} ${lastName}`;
      setAuthState({
        authToken: accessToken!,
        adminName,
        isAuthenticating: false,
        errorMsg: null,
      });

      setRecord(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN, accessToken!);
      setRecord(LOCAL_STORAGE_ITEM_NAME.ADMIN_NAME, adminName);
    } catch (error) {
      if (!(error instanceof Error)) throw error;
      setAuthState({ ...LEAVING_AUTH_STATE, errorMsg: error.message });
    }
  };

  const leaveAdminsPage = (error?: string): void => {
    if (error) {
      setAuthState({
        ...authState,
        errorMsg: error,
      });
      setTimeout((): void => {
        setAuthState(LEAVING_AUTH_STATE);
      }, UNAUTHORIZED_EXIT_DELAY);
    } else {
      setAuthState(LEAVING_AUTH_STATE);
    }
    setRecord(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN, null);
    setRecord(LOCAL_STORAGE_ITEM_NAME.ADMIN_NAME, null);
  };

  return { getAdminsAccess, leaveAdminsPage, authState, setAuthState };
};

export default useAuthState;
