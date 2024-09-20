import { PATHS } from '../../constants/constants';
import { PAGE_NAMES } from '../../types/enums';

const getPageNameByPath = (path: string): PAGE_NAMES => {
  const result: [string, string] | undefined = Object.entries(PATHS).find(
    (value: [string, string]): boolean => value[1] === path
  );

  return result ? (result[0] as PAGE_NAMES) : PAGE_NAMES.NOT_FOUND;
};

console.log(getPageNameByPath('sign_in'));

export { getPageNameByPath };
