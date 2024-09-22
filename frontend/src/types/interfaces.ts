import {
  FocusEventHandler,
  FormEventHandler,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
} from 'react';

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

export type {
  ChildrenOnlyProps,
  CustomFormProps,
  PasswordInputProps,
  TextInputProps,
  FormSubmitButtonProps,
  FormAlertProps,
  CustomButtonProps,
};
