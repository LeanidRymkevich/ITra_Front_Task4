import axios, { AxiosError, HttpStatusCode } from 'axios';
import { SERVER_URL, TOKEN_HEADER } from '../constants/constants';
import { SERVER_ENDPOINTS } from '../types/enums';
import { ServerResponse } from '../types/interfaces';
import UnauthorizedError from '../errors/UnauthorizedError';

const authWithToken = async (token: string): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.AUTH_WITH_TOKEN}`;

  try {
    const { data } = await axios.post(url, null, {
      headers: {
        [TOKEN_HEADER]: token,
      },
    });

    return data as ServerResponse;
  } catch (error) {
    if (
      !(error instanceof AxiosError) ||
      error.status !== HttpStatusCode.Unauthorized
    ) {
      throw error;
    }

    throw new UnauthorizedError();
  }
};

const signIn = async (formData: FormData): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.SIGN_IN}`;
  try {
    const { data } = await axios.post(
      url,
      Object.fromEntries(formData.entries()),
      {}
    );

    return data as ServerResponse;
  } catch (error) {
    if (
      !(error instanceof AxiosError) ||
      error.status !== HttpStatusCode.Unauthorized
    ) {
      throw error;
    }

    throw new UnauthorizedError();
  }
};

const signUp = async (formData: FormData): Promise<ServerResponse> => {
  const url = `${SERVER_URL}${SERVER_ENDPOINTS.SIGN_UP}`;
  try {
    const { data } = await axios.post(
      url,
      Object.fromEntries(formData.entries())
    );

    return data as ServerResponse;
  } catch (error) {
    if (
      !(error instanceof AxiosError) ||
      error.status !== HttpStatusCode.Unauthorized
    ) {
      throw error;
    }

    throw new UnauthorizedError();
  }
};

export { authWithToken, signIn, signUp };
