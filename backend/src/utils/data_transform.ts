import Admin from '../db/models/Admin';

import { AdminData } from '../types/interfaces';

const getAdminData = (data: Admin): AdminData => {
  const { id, firstName, lastName, email, lastLogin, status } = data;
  return { id, firstName, lastName, email, lastLogin, status };
};

const getCurrentDateString = (): string => {
  return new Date(Date.now()).toLocaleString('en-GB');
};

export { getAdminData, getCurrentDateString };
