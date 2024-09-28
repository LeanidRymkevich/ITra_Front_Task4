import UnauthorizedError from '../errors/UnauthorizedError';
import { AdminData, AdminsBoardData } from '../types/interfaces';
import { AdminsBoardState, ManageAdminActionArgs } from '../types/types';

const sortRowsByName = (
  rowsData: AdminsBoardData[],
  isAscending: boolean = true
): AdminsBoardData[] => {
  const res = rowsData.sort((a, b) => {
    const first = `${a.firstName} ${a.lastName}`;
    const second = `${b.firstName} ${b.lastName}`;
    return first.localeCompare(second);
  });
  if (isAscending) return res;
  return res.reverse();
};

const manageAdminsActions = async (
  {
    setIsPending,
    setError,
    setAdminsMap,
    leaveAdminsPage,
    action,
  }: ManageAdminActionArgs,
  admins: AdminData[] = []
): Promise<void> => {
  try {
    setIsPending(true);
    const data: AdminData[] = await action(admins);

    const adminsMap: AdminsBoardState = data.reduce(
      (obj: AdminsBoardState, admin: AdminData) => {
        obj[admin.id] = { ...admin, checked: false };
        return obj;
      },
      {}
    );

    setAdminsMap(adminsMap);
    setIsPending(false);
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    if (error instanceof UnauthorizedError) {
      leaveAdminsPage(error.message);
    } else if (error instanceof Error) {
      setError(error);
      setIsPending(false);
    }
  }
};

export { sortRowsByName, manageAdminsActions };
