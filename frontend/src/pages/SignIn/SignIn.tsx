import {
  FC,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';

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

import { authenticate } from '../../services/authentication';
import TextInput from '../../components/FormComponents/TextInput/TextInput';

const SignIn: FC = (): JSX.Element => {
  const [isFormSending, setIsFormSending] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [authErrorMsg, setAuthErrorMsg] = useState<string>('');

  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const onEyeClick: MouseEventHandler<HTMLButtonElement> = () => {
    passwordInputRef.current!.type = !isPasswordVisible ? 'text' : 'password';
    setIsPasswordVisible(!isPasswordVisible);
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
      const response: object = await authenticate(new FormData(form));
      console.log(response);
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
          <h2 className="display-6 fw-bold mb-3">{PAGE_NAMES.SIGN_IN}</h2>

          <CustomForm onSubmit={onSubmit}>
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
                isPasswordVisible,
                isFormSending,
                onEyeClick,
                passwordInputRef,
                labelText: FORM_LABEL_TEXTS.PASSWORD,
                tipText: FORM_INPUTS_TIPS.PASSWORD,
                name: FORM_LABEL_NAME_ATTR.PASSWORD,
              }}
            ></PasswordInput>

            <FormAlert msg={authErrorMsg} />

            <FormSubmitButton
              {...{ isFormSending, text: PAGE_NAMES.SIGN_IN }}
            />
          </CustomForm>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
