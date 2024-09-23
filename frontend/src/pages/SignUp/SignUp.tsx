import { FC, FormEvent, FormEventHandler, useRef, useState } from 'react';

import {
  PAGE_NAMES,
  FORM_INPUTS_TIPS,
  FORM_LABEL_TEXTS,
  FORM_LABEL_NAME_ATTR,
} from '../../types/enums';

import Container from '../../components/Container/Container';
import CustomForm from '../../components/FormComponents/CustomForm/CustomForm';
import FormAlert from '../../components/FormComponents/FormAlert/FormAlert';
import FormSubmitButton from '../../components/FormComponents/FormSubmitButton/FormSubmitButton';
import PasswordInput from '../../components/FormComponents/PasswordInput/PasswordInput';
import TextInput from '../../components/FormComponents/TextInput/TextInput';

import { register } from '../../services/authentication';
import { checkInputsMatch } from '../../utils/forms_utils';
import useAuthState from '../../hooks/useAuthState';

const SignUp: FC = (): JSX.Element => {
  const [isFormSending, setIsFormSending] = useState<boolean>(false);
  const [authErrorMsg, setAuthErrorMsg] = useState<string>('');

  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordInputRef = useRef<HTMLInputElement | null>(null);

  const { saveToken } = useAuthState();

  const onPasswordFocus = (): void => {
    checkInputsMatch(
      passwordInputRef.current!,
      repeatPasswordInputRef.current!
    );
  };

  // TODO Add redirection on successful auth and fit to auth process
  const onSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setAuthErrorMsg('');

    const form = event.target as HTMLFormElement;
    form.classList.add('was-validated');

    if (!form.checkValidity()) return;

    try {
      setIsFormSending(true);
      const response = await register(new FormData(form));
      saveToken(response);
      setIsFormSending(false);
    } catch (err) {
      if (!(err instanceof Error)) throw err;
      setAuthErrorMsg(err.message);
      setIsFormSending(false);
    }
  };

  return (
    <Container>
      <div className="pt-3 row-cols-1">
        <div className="col col-sm-9 col-md-7 col-xxl-6 m-auto">
          <h2 className="display-6 fw-bold mb-3">{PAGE_NAMES.SIGN_UP}</h2>

          <CustomForm onSubmit={onSubmit}>
            <TextInput
              {...{
                isFormSending,
                labelText: FORM_LABEL_TEXTS.FIRST_NAME,
                tipText: FORM_INPUTS_TIPS.EMAIL,
                name: FORM_LABEL_NAME_ATTR.FIRST_NAME,
                type: 'text',
                signElement: <i className="bi bi-person-fill"></i>,
              }}
            />

            <TextInput
              {...{
                isFormSending,
                labelText: FORM_LABEL_TEXTS.LAST_NAME,
                tipText: FORM_INPUTS_TIPS.EMAIL,
                name: FORM_LABEL_NAME_ATTR.LAST_NAME,
                type: 'text',
                signElement: <i className="bi bi-person-fill"></i>,
              }}
            />

            <TextInput
              {...{
                isFormSending,
                labelText: FORM_LABEL_TEXTS.EMAIL,
                tipText: FORM_INPUTS_TIPS.EMAIL,
                name: FORM_LABEL_NAME_ATTR.EMAIL,
                type: 'email',
                signElement: <i className="bi bi-envelope-fill"></i>,
              }}
            />

            <PasswordInput
              {...{
                isFormSending,
                passwordInputRef,
                labelText: FORM_LABEL_TEXTS.PASSWORD,
                tipText: FORM_INPUTS_TIPS.REPEAT_PASSWORD,
                name: FORM_LABEL_NAME_ATTR.PASSWORD,
                onBlur: onPasswordFocus,
              }}
            ></PasswordInput>

            <PasswordInput
              {...{
                isFormSending,
                passwordInputRef: repeatPasswordInputRef,
                labelText: FORM_LABEL_TEXTS.REPEAT_PASSWORD,
                tipText: FORM_INPUTS_TIPS.REPEAT_PASSWORD,
                name: FORM_LABEL_NAME_ATTR.REPEAT_PASSWORD,
                onBlur: onPasswordFocus,
              }}
            ></PasswordInput>

            <FormAlert msg={authErrorMsg} />

            <FormSubmitButton
              {...{ isFormSending, text: PAGE_NAMES.SIGN_UP }}
            />
          </CustomForm>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
