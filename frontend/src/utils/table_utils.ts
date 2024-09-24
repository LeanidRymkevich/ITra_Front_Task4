import { AdminsBoardData } from '../types/interfaces';

const sortRowsByName = (
  rowsData: AdminsBoardData[],
  isAscending: boolean = true
): AdminsBoardData[] => {
  const res = rowsData.sort((a, b) => a.name.localeCompare(b.name));
  if (isAscending) return res;
  return res.reverse();
};

export { sortRowsByName };
