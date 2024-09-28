import { FC, FormEvent, FormEventHandler, useRef } from 'react';

import {
  PAGE_NAMES,
  FORM_INPUTS_TIPS,
  FORM_LABEL_TEXTS,
  FORM_LABEL_NAME_ATTR,
} from '../../types/enums';

import Container from '../../components/Container/Container';
import CustomForm from '../../components/FormComponents/CustomForm/CustomForm';
import PasswordInput from '../../components/FormComponents/PasswordInput/PasswordInput';
import FormSubmitButton from '../../components/FormComponents/FormSubmitButton/FormSubmitButton';
import FormAlert from '../../components/FormComponents/FormAlert/FormAlert';
import TextInput from '../../components/FormComponents/TextInput/TextInput';

import { signIn } from '../../api/auth';
import useAuthState from '../../hooks/useAuthState';

const SignIn: FC = (): JSX.Element => {
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const { getAdminsAccess, authState, setAuthState } = useAuthState();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    form.classList.add('was-validated');

    if (!form.checkValidity()) return;

    getAdminsAccess(signIn, new FormData(form));
  };

  const onCloseErrBtn = (): void => {
    setAuthState({ ...authState, errorMsg: null });
  };

  return (
    <Container>
      <div className="pt-3 row-cols-1">
        <div className="col col-sm-9 col-md-7 col-xxl-6 m-auto">
          <h2 className="display-6 fw-bold mb-3">{PAGE_NAMES.SIGN_IN}</h2>

          <CustomForm onSubmit={onSubmit}>
            <TextInput
              {...{
                isFormSending: authState.isAuthenticating,
                labelText: FORM_LABEL_TEXTS.EMAIL,
                tipText: FORM_INPUTS_TIPS.EMAIL,
                name: FORM_LABEL_NAME_ATTR.EMAIL,
                type: 'email',
                signElement: <i className="bi bi-envelope-fill"></i>,
              }}
            />

            <PasswordInput
              {...{
                isFormSending: authState.isAuthenticating,
                passwordInputRef,
                labelText: FORM_LABEL_TEXTS.PASSWORD,
                tipText: FORM_INPUTS_TIPS.PASSWORD,
                name: FORM_LABEL_NAME_ATTR.PASSWORD,
              }}
            ></PasswordInput>

            {authState.errorMsg && (
              <FormAlert msg={authState.errorMsg} onClick={onCloseErrBtn} />
            )}

            <FormSubmitButton
              {...{
                isFormSending: authState.isAuthenticating,
                text: PAGE_NAMES.SIGN_IN,
              }}
            />
          </CustomForm>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
