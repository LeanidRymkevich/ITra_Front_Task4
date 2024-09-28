import {
  Table,
  Column,
  Model,
  Index,
  NotEmpty,
  IsIn,
  IsEmail,
  AllowNull,
  NotNull,
} from 'sequelize-typescript';

import { ADMIN_STATUS } from '../../types/enums';

const EMAIL_INDEX_NAME = 'email_index';

@Table
class Admin extends Model {
  @AllowNull(false)
  @NotNull
  @NotEmpty
  @Column
  firstName: string;

  @AllowNull(false)
  @NotNull
  @NotEmpty
  @Column
  lastName: string;

  @AllowNull(false)
  @NotNull
  @NotEmpty
  @Column
  password: string;

  @AllowNull(false)
  @NotNull
  @NotEmpty
  @IsEmail
  @Index(EMAIL_INDEX_NAME)
  @Column
  email: string;

  @AllowNull(false)
  @NotNull
  @NotEmpty
  @Column
  lastLogin: string;

  @AllowNull(false)
  @NotNull
  @IsIn([[ADMIN_STATUS.ACTIVE, ADMIN_STATUS.BLOCKED]])
  @Column
  status: ADMIN_STATUS;
}

export default Admin;
