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

export { ENDPOINTS, ADMIN_STATUS, AUTH_ENDPOINTS };
