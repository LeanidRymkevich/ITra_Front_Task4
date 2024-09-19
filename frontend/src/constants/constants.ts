import { PAGE_NAMES } from '../types/enums';

const APP_NAME = PAGE_NAMES.ADMINS_BOARD;

const PATHS: Record<PAGE_NAMES, string> = {
  [PAGE_NAMES.SIGN_IN]: 'sign_in',
  [PAGE_NAMES.SIGN_UP]: 'sign_up',
  [PAGE_NAMES.ADMINS_BOARD]: 'admins_board',
};

export { PATHS, APP_NAME };
