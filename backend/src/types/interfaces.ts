import { ADMIN_STATUS } from './enums';

interface AdminData {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
  status: ADMIN_STATUS;
}

export { AdminData };
