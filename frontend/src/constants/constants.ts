import { PAGE_NAMES } from '../types/enums';
import { PathsMap } from '../types/types';

const APP_NAME = PAGE_NAMES.ADMINS_BOARD;
const ROOT_PATH = '/';

const PATHS: PathsMap = {
  [PAGE_NAMES.SIGN_IN]: '/sign_in',
  [PAGE_NAMES.SIGN_UP]: '/sign_up',
  [PAGE_NAMES.ADMINS_BOARD]: '/admins_board',
};

const CHECKBOX_DATA_ID_ATTRIBUTE = 'data-admin-id';

export { PATHS, APP_NAME, ROOT_PATH, CHECKBOX_DATA_ID_ATTRIBUTE };
