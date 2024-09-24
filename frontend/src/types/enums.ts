enum PAGE_NAMES {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up',
  ADMINS_BOARD = `Admins' Board`,
  NOT_FOUND = 'Page Not Found',
}

enum HEADER_LINK_NAMES {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up',
  SIGN_OUT = 'Sign Out',
}

enum FORM_INPUTS_TIPS {
  EMAIL = 'Your email must be non-empty and follow pattern: [ld+=Sfn1-!#&?$ad][@gm1ail.co1m]',
  PASSWORD = 'Enter non-empty password',
  FIRST_LAST_NAME = 'Enter your name using latin characters, numbers and [-] sign',
  REPEAT_PASSWORD = 'Enter non-empty password, password and repeat-password fields must be identical',
}

enum FORM_LABEL_TEXTS {
  PASSWORD = 'Password',
  REPEAT_PASSWORD = 'Repeat Password',
  EMAIL = 'Email',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
}

enum FORM_LABEL_NAME_ATTR {
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
  EMAIL = 'email',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
}

enum ADMIN_STATUS {
  BLOCKED = 'Blocked',
  ACTIVE = 'Active',
}

enum ADMIN_TABLE_COLUMN_TITLES {
  NAME = 'Name',
  EMAIL = 'Email',
  LAST_LOGIN = 'Last login',
  STATUS = 'Status',
}

enum LOCAL_STORAGE_ITEM_NAME {
  AUTH_TOKEN = 'authToken',
}

enum TABLE_ROW_CHECKBOX_DATA_ATTR {
  ATTRIBUTE = 'data-admin-id',
  DOM_PROP = 'adminId',
}

export {
  PAGE_NAMES,
  HEADER_LINK_NAMES,
  FORM_INPUTS_TIPS,
  FORM_LABEL_TEXTS,
  FORM_LABEL_NAME_ATTR,
  ADMIN_STATUS,
  ADMIN_TABLE_COLUMN_TITLES,
  LOCAL_STORAGE_ITEM_NAME,
  TABLE_ROW_CHECKBOX_DATA_ATTR,
};
