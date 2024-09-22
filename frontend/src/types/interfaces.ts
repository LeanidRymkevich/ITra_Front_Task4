import {
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

interface EmailInputProps {
  isFormSending: boolean;
  labelText: string;
  tipText: string;
  name: string;
}

interface PasswordInputProps extends EmailInputProps {
  isPasswordVisible: boolean;
  onEyeClick: MouseEventHandler<HTMLButtonElement>;
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
  EmailInputProps,
  FormSubmitButtonProps,
  FormAlertProps,
};
