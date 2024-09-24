import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { ADMIN_STATUS } from './enums';

interface ChildrenOnlyProps {
  children: ReactNode;
}

interface CustomFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

interface TextInputProps {
  isFormSending: boolean;
  labelText: string;
  tipText: string;
  name: string;
  type: 'email' | 'text';
  signElement: ReactNode;
}

interface PasswordInputProps
  extends Omit<TextInputProps, 'type' | 'signElement'> {
  passwordInputRef: LegacyRef<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

interface FormSubmitButtonProps {
  isFormSending: boolean;
  text: string;
}

interface FormAlertProps {
  msg: string;
}

interface CustomButtonProps {
  text?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
  disabled?: boolean;
}

interface AdminData {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
  status: ADMIN_STATUS;
}

interface AdminsBoardData extends AdminData {
  checked: boolean;
}

interface AdminRowProps extends AdminsBoardData {
  isPending: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface AdminTableProps {
  isPending: boolean;
  rowsData: AdminsBoardData[];
  onChange: ChangeEventHandler<HTMLInputElement>; // may be changed later
}

export type {
  ChildrenOnlyProps,
  CustomFormProps,
  PasswordInputProps,
  TextInputProps,
  FormSubmitButtonProps,
  FormAlertProps,
  CustomButtonProps,
  AdminData,
  AdminTableProps,
  AdminRowProps,
  AdminsBoardData,
};
