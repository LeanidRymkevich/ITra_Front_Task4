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

export { authWithToken };
