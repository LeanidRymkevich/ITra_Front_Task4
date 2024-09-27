import { ADMIN_STATUS } from './enums';

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {
  firstName: string;
  lastName: string;
}

interface CreateAdminData extends SignUpData {
  lastLogin: string;
  status: ADMIN_STATUS;
}

interface AdminData extends Omit<CreateAdminData, 'password'> {
  id: string;
}

export { AdminData, SignUpData, CreateAdminData, SignInData };
