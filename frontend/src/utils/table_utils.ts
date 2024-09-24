import { AdminData, AdminsBoardData } from '../types/interfaces';
import { AdminsBoardState, ManageAdminActionArgs } from '../types/types';

import { NO_RIGHTS_MSG } from '../services/authentication';

const NOT_EXCEPTED_ERROR_MSG = NO_RIGHTS_MSG; // later could be change on error type or whatever
const DELAY_BEFORE_EXIT = 5000; // ms

const sortRowsByName = (
  rowsData: AdminsBoardData[],
  isAscending: boolean = true
): AdminsBoardData[] => {
  const res = rowsData.sort((a, b) => a.name.localeCompare(b.name));
  if (isAscending) return res;
  return res.reverse();
};

const manageAdminsActions = async (
  {
    setIsPending,
    setError,
    setAdminsMap,
    saveToken,
    action,
  }: ManageAdminActionArgs,
  ids: string[] = []
): Promise<void> => {
  try {
    setIsPending(true);
    const admins = await action(ids);
    const adminsMap: AdminsBoardState = admins.reduce(
      (obj: AdminsBoardState, admin: AdminData) => {
        obj[admin.id] = { ...admin, checked: false }; // TODO uncheck all checkboxes after action. Is that correct?
        return obj;
      },
      {}
    );

    setAdminsMap(adminsMap);
    setIsPending(false);
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    if (error.message === NOT_EXCEPTED_ERROR_MSG) {
      setError(error);
      setTimeout(() => saveToken(null), DELAY_BEFORE_EXIT);
    } else {
      setError(error);
      setIsPending(false);
    }
  }
};

export { sortRowsByName, manageAdminsActions };
