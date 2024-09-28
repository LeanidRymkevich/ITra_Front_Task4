import { PAGE_NAMES } from '../types/enums';
import { AuthState, PathsMap } from '../types/types';

const APP_NAME = PAGE_NAMES.ADMINS_BOARD;
const ROOT_PATH = '/';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const TOKEN_HEADER = 'accessToken';
const UNAUTHORIZED_EXIT_DELAY = 5000;

const PATHS: PathsMap = {
  [PAGE_NAMES.SIGN_IN]: '/sign_in',
  [PAGE_NAMES.SIGN_UP]: '/sign_up',
  [PAGE_NAMES.ADMINS_BOARD]: '/admins_board',
};

const LEAVING_AUTH_STATE: AuthState = {
  authToken: null,
  adminName: null,
  isAuthenticating: false,
  errorMsg: null,
};

export {
  PATHS,
  APP_NAME,
  ROOT_PATH,
  SERVER_URL,
  TOKEN_HEADER,
  UNAUTHORIZED_EXIT_DELAY,
  LEAVING_AUTH_STATE,
};
