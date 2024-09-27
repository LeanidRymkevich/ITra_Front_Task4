import {
  Table,
  Column,
  Model,
  Unique,
  Index,
  NotEmpty,
  IsIn,
  IsEmail,
  IsDate,
  AllowNull,
  NotNull,
} from 'sequelize-typescript';

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
  @Unique
  @Index(EMAIL_INDEX_NAME)
  @Column
  email: string;

  @AllowNull(false)
  @NotNull
  @NotEmpty
  @IsDate
  @Column
  lastLogin: string;

  @AllowNull(false)
  @NotNull
  @IsIn([['Active', 'Block']])
  @Column
  status: 'Active' | 'Block';
}

export default Admin;
