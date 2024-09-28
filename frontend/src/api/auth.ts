import axios from 'axios';
import { SERVER_URL, TOKEN_HEADER } from '../constants/constants';
import { SERVER_ENDPOINTS } from '../types/enums';
import { ServerResponse } from '../types/interfaces';

const authWithToken = async (token: string): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.AUTH_WITH_TOKEN}`;
  const { data } = await axios.post(url, null, {
    headers: {
      [TOKEN_HEADER]: token,
    },
  });

  return data as ServerResponse;
};

const signIn = async (formData: FormData): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.SIGN_IN}`;
  const { data } = await axios.post(
    url,
    Object.fromEntries(formData.entries()),
    {}
  );

  return data as ServerResponse;
};

const signUp = async (formData: FormData): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.SIGN_UP}`;
  const { data } = await axios.post(
    url,
    Object.fromEntries(formData.entries())
  );

  return data as ServerResponse;
};

export { authWithToken, signIn, signUp };
