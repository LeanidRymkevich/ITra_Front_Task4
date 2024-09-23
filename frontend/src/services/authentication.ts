import { ADMIN_STATUS } from '../types/enums';
import { AdminData } from '../types/types';

// Temporary implementation for testing UI
const TEST_ADMIN: AdminData & { password: string } = {
  id: '12345',
  email: 'johnsmith@gmail.com',
  password: '12345',
  name: 'John Smith',
  lastLogin: Date.now().toString(),
  status: ADMIN_STATUS.ACTIVE,
};

const NO_ADMIN_MSG =
  'Long and boring message about the fact that user couldn`t be found or entered password is incorrect. ';
const NO_RIGHTS_MSG = 'Current admin was blocked or deleted';
const NO_SUCH_ADMIN_MSG = 'No such admin';
const ADMIN_ALREADY_EXISTS_MSG = 'Admin with such email already exists!';

const DELAY = 3000; // ms

// map like {[email: user_obj]}
const admins: Record<string, typeof TEST_ADMIN> = {
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
};

const authenticate = async (data: FormData): Promise<AdminData> => {
  return new Promise((resolve, reject) => {
    const admin: typeof TEST_ADMIN | undefined =
      admins[data.get('email') as string];

    if (!admin || admin.password !== data.get('password')) {
      setTimeout(() => reject(new Error(NO_ADMIN_MSG)), DELAY);
      return;
    }

    admin.lastLogin = Date.now().toString();
    const { id, email, name, lastLogin, status } = admin;
    setTimeout(() => resolve({ id, email, name, lastLogin, status }), DELAY);
  });
};

const register = async (data: FormData): Promise<AdminData> => {
  return new Promise((resolve, reject) => {
    const email = data.get('email') as string;
    const admin: typeof TEST_ADMIN | undefined = admins[email];

    if (admin) {
      setTimeout(() => reject(new Error(ADMIN_ALREADY_EXISTS_MSG)), DELAY);
      return;
    }

    const password = data.get('password') as string;
    const lastLogin = Date.now().toString();
    const id = Math.floor(Math.random() * 10000).toString(); // possible matches, but it's ok for testing
    const status = ADMIN_STATUS.ACTIVE;
    const name = `${data.get('firstName') as string} ${data.get('lastName') as string}`;

    admins[email] = { id, email, password, name, lastLogin, status };

    setTimeout(() => resolve({ id, email, name, lastLogin, status }), DELAY);
  });
};

const removePasswordField = ({
  id,
  email,
  name,
  lastLogin,
  status,
}: AdminData) => {
  return {
    id,
    email,
    name,
    lastLogin,
    status,
  };
};

const getAdmins = (): Promise<AdminData[]> => {
  const testVariable = true; // to have the possibility to test UI behavior, for example if user was blocked

  return new Promise((resolve, reject) => {
    if (!testVariable) {
      setTimeout(() => reject(new Error(NO_RIGHTS_MSG)), DELAY);
      return;
    }

    setTimeout(
      () =>
        resolve(
          Object.values(admins).map((admin) => removePasswordField(admin))
        ),
      DELAY
    );
  });
};

// identifier is currently email, but later could be INDEX in db
const blockAdmin = (identifier: string): Promise<AdminData[]> => {
  const isPresent = identifier in admins;
  const testVariable = true; // to have the possibility to test UI behavior, for example if user was blocked

  return new Promise((resolve, reject) => {
    if (!isPresent) {
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);
      return;
    }

    if (!testVariable) {
      setTimeout(() => reject(new Error(NO_RIGHTS_MSG)), DELAY);
      return;
    }

    admins[identifier].status = ADMIN_STATUS.BLOCKED;
    setTimeout(
      () =>
        resolve(
          Object.values(admins).map((admin) => removePasswordField(admin))
        ),
      DELAY
    );
  });
};

const unBlockAdmin = (identifier: string): Promise<object[]> => {
  const isPresent = identifier in admins;
  const testVariable = true; // to have the possibility to test UI behavior, for example if user was blocked

  return new Promise((resolve, reject) => {
    if (!isPresent) {
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);
      return;
    }

    if (!testVariable) {
      setTimeout(() => reject(new Error(NO_RIGHTS_MSG)), DELAY);
      return;
    }

    admins[identifier].status = ADMIN_STATUS.ACTIVE;
    setTimeout(
      () =>
        resolve(
          Object.values(admins).map((admin) => removePasswordField(admin))
        ),
      DELAY
    );
  });
};

const deleteAdmin = (identifier: string): Promise<object[]> => {
  const isPresent = identifier in admins;
  const testVariable = true; // to have the possibility to test UI behavior, for example if user was blocked

  return new Promise((resolve, reject) => {
    if (!isPresent) {
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);
      return;
    }

    if (!testVariable) {
      setTimeout(() => reject(new Error(NO_RIGHTS_MSG)), DELAY);
      return;
    }

    delete admins[identifier];
    setTimeout(
      () =>
        resolve(
          Object.values(admins).map((admin) => removePasswordField(admin))
        ),
      DELAY
    );
  });
};

export {
  authenticate,
  getAdmins,
  blockAdmin,
  unBlockAdmin,
  deleteAdmin,
  register,
};
