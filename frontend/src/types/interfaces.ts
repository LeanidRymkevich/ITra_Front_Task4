import { FormEventHandler, LegacyRef, ReactNode } from 'react';

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
}

interface FormSubmitButtonProps {
  isFormSending: boolean;
  text: string;
}

interface FormAlertProps {
  msg: string;
}

export type {
  ChildrenOnlyProps,
  CustomFormProps,
  PasswordInputProps,
  TextInputProps,
  FormSubmitButtonProps,
  FormAlertProps,
};
