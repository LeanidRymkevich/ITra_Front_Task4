import { ADMIN_STATUS } from '../types/enums';

// Temporary implementation for testing UI
const TEST_ADMIN: Record<string, string> = {
  email: 'johnsmith@gmail.com',
  password: '12345',
  firstName: 'John',
  lastName: 'Smith',
  lastLogin: Date.now().toString(),
  status: ADMIN_STATUS.ACTIVE,
};

const NO_ADMIN_MSG =
  'Long and boring message about the fact that user couldn`t be found or entered password is incorrect. ';
const NO_RIGHTS_MSG = 'Current admin was blocked or deleted';
const NO_SUCH_ADMIN_MSG = 'No such admin';

const DELAY = 3000; // ms

// map like {[email: user_obj]}
const admins: Record<string, Record<string, string>> = {
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
  [TEST_ADMIN.email]: TEST_ADMIN,
};

const authenticate = async (data: FormData): Promise<object> => {
  return new Promise((resolve, reject) => {
    const admin: typeof TEST_ADMIN | undefined =
      admins[data.get('email') as string];

    if (!admin || admin.password !== data.get('password'))
      setTimeout(() => reject(new Error(NO_ADMIN_MSG)), DELAY);

    setTimeout(() => resolve(admin), DELAY);
  });
};

const getAdmins = (): Promise<object[]> => {
  const testVariable = true; // to have the possibility to test UI behavior

  return new Promise((resolve, reject) => {
    if (!testVariable)
      setTimeout(() => reject(new Error(NO_RIGHTS_MSG)), DELAY);

    setTimeout(() => resolve(Object.values(admins)), DELAY);
  });
};

// identifier is currently email, but later could be INDEX in db
const blockAdmin = (identifier: string): Promise<object[]> => {
  const isPresent = identifier in admins;

  return new Promise((resolve, reject) => {
    if (!isPresent)
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);

    admins[identifier].status = ADMIN_STATUS.BLOCKED;
    setTimeout(() => resolve(Object.values(admins)), DELAY);
  });
};

const unBlockAdmin = (identifier: string): Promise<object[]> => {
  const isPresent = identifier in admins;

  return new Promise((resolve, reject) => {
    if (!isPresent)
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);

    admins[identifier].status = ADMIN_STATUS.ACTIVE;
    setTimeout(() => resolve(Object.values(admins)), DELAY);
  });
};

const deleteAdmin = (identifier: string): Promise<object[]> => {
  const isPresent = identifier in admins;

  return new Promise((resolve, reject) => {
    if (!isPresent)
      setTimeout(() => reject(new Error(NO_SUCH_ADMIN_MSG)), DELAY);

    delete admins[identifier];
    setTimeout(() => resolve(Object.values(admins)), DELAY);
  });
};

export { authenticate, getAdmins, blockAdmin, unBlockAdmin, deleteAdmin };
