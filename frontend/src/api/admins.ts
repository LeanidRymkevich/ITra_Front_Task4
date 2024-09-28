import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { AdminData, ServerResponse } from '../types/interfaces';
import { SERVER_URL, TOKEN_HEADER } from '../constants/constants';
import { LOCAL_STORAGE_ITEM_NAME, SERVER_ENDPOINTS } from '../types/enums';
import { getItem } from '../utils/localStorage_util';
import UnauthorizedError from '../errors/UnauthorizedError';

const URL = `${SERVER_URL}${SERVER_ENDPOINTS.ADMINS}`;

const getAllAdmins = async (): Promise<AdminData[]> => {
  const { data: resp, status } = await axios.get(URL, {
    headers: {
      [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
    },
  });
  const { data, error } = resp as ServerResponse;
  if (status === StatusCodes.UNAUTHORIZED) throw new UnauthorizedError(error);
  if (error) throw new Error(error);

  return data as AdminData[];
};

const updateAdmins = async (admins: AdminData[]): Promise<AdminData[]> => {
  const { data: resp, status } = await axios.patch(URL, admins, {
    headers: {
      [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
    },
  });
  const { data, error } = resp as ServerResponse;
  if (status === StatusCodes.UNAUTHORIZED) throw new UnauthorizedError(error);
  if (error) throw new Error(error);

  return data as AdminData[];
};

const deleteAdmins = async (admins: AdminData[]): Promise<AdminData[]> => {
  const ids: string[] = admins.map((admin) => admin.id);
  const { data: resp, status } = await axios.delete(URL, {
    headers: {
      [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
    },
    data: ids,
  });
  const { data, error } = resp as ServerResponse;
  if (status === StatusCodes.UNAUTHORIZED) throw new UnauthorizedError(error);
  if (error) throw new Error(error);

  return data as AdminData[];
};

export { getAllAdmins, updateAdmins, deleteAdmins };
