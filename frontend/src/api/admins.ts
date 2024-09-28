import axios, { AxiosError, HttpStatusCode } from 'axios';
import { AdminData, ServerResponse } from '../types/interfaces';
import { SERVER_URL, TOKEN_HEADER } from '../constants/constants';
import { LOCAL_STORAGE_ITEM_NAME, SERVER_ENDPOINTS } from '../types/enums';
import { getItem } from '../utils/localStorage_util';
import UnauthorizedError from '../errors/UnauthorizedError';

const URL = `${SERVER_URL}${SERVER_ENDPOINTS.ADMINS}`;

const getAllAdmins = async (): Promise<AdminData[]> => {
  try {
    const { data: resp } = await axios.get(URL, {
      headers: {
        [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
      },
    });
    const { data } = resp as ServerResponse;

    return data as AdminData[];
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

const updateAdmins = async (admins: AdminData[]): Promise<AdminData[]> => {
  try {
    const { data: resp } = await axios.patch(URL, admins, {
      headers: {
        [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
      },
    });
    const { data } = resp as ServerResponse;

    return data as AdminData[];
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

const deleteAdmins = async (admins: AdminData[]): Promise<AdminData[]> => {
  try {
    const ids: string[] = admins.map((admin) => admin.id);
    const { data: resp } = await axios.delete(URL, {
      headers: {
        [TOKEN_HEADER]: getItem(LOCAL_STORAGE_ITEM_NAME.AUTH_TOKEN),
      },
      data: ids,
    });
    const { data } = resp as ServerResponse;

    return data as AdminData[];
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

export { getAllAdmins, updateAdmins, deleteAdmins };
