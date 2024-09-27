enum ENDPOINTS {
  ADMINS = '/admins',
  AUTH = '/auth',
}

enum AUTH_ENDPOINTS {
  SIGN_IN = '/sign_in',
  SIGN_UP = '/sign_up',
}

enum ADMIN_STATUS {
  BLOCKED = 'Blocked',
  ACTIVE = 'Active',
}

enum ERROR_MSGs {
  UNAUTHORIZED = 'Admin no longer exists or has been blocked, or deleted.',
  INVALID_PASSWORD = `Invalid password`,
}

export { ENDPOINTS, ADMIN_STATUS, AUTH_ENDPOINTS, ERROR_MSGs };
