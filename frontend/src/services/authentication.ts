// Temporary implementation for testing UI
const TEST_USER: Record<string, string> = {
  email: 'johnsmith@gmail.com',
  password: '12345',
  firstName: 'John',
  lastName: 'Smith',
};
const NO_USER_MSG =
  'Long and boring message about the fact that user couldn`t be found or entered password is incorrect. ';

// map like {[email: user_obj]}
const users: Record<string, Record<string, string>> = {
  [TEST_USER.email]: TEST_USER,
};

const authenticate = async (data: FormData): Promise<object> => {
  const delay = 3000; // ms

  return new Promise((resolve, reject) => {
    const user: typeof TEST_USER | undefined =
      users[data.get('email') as string];
    if (!user || user.password !== data.get('password'))
      setTimeout(() => reject(new Error(NO_USER_MSG)), delay);
    setTimeout(() => resolve(user), delay);
  });
};

export { authenticate };
