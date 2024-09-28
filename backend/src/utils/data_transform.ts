import Admin from '../db/models/Admin';

import { AdminData } from '../types/interfaces';

const getAdminData = (data: Admin): AdminData => {
  const { id, firstName, lastName, email, lastLogin, status } = data;
  return { id, firstName, lastName, email, lastLogin, status };
};

const getCurrentDateString = (): string => {
  return new Date(Date.now()).toLocaleString('en-GB');
};

const getAdminDataArray = (admins: Admin[]): AdminData[] => {
  return admins.map((admin) => getAdminData(admin));
};

export { getAdminData, getCurrentDateString, getAdminDataArray };
