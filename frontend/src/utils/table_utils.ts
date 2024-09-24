import { AdminRowProps } from '../types/interfaces';

const sortRowsByName = (
  rowsData: Omit<AdminRowProps, 'onChange'>[],
  isAscending: boolean = true
): Omit<AdminRowProps, 'onChange'>[] => {
  const res = rowsData.sort((a, b) => a.name.localeCompare(b.name));
  if (isAscending) return res;
  return res.reverse();
};

export { sortRowsByName };
