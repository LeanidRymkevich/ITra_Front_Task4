import {
  FC,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';
import Container from '../../components/Container/Container';
import { PAGE_NAMES, FORM_INPUTS_TIPS } from '../../types/enums';
import { authenticate } from '../../services/authentication';
import CustomForm from '../../components/FormComponents/CustomForm/CustomForm';
import PasswordInput from '../../components/FormComponents/PasswordInput/PasswordInput';
import EmailInput from '../../components/FormComponents/EmailInput/EmailInput';
import FormSubmitButton from '../../components/FormComponents/FormSubmitButton/FormSubmitButton';
import FormAlert from '../../components/FormComponents/FormAlert/FormAlert';

const PASSWORD_LABEL_TEXT = 'Password';
const EMAIL_LABEL_TEXT = 'Email';
const PASSWORD_NAME = 'password';
const EMAIL_NAME = 'email';

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
            <EmailInput
              {...{
                isFormSending,
                labelText: EMAIL_LABEL_TEXT,
                tipText: FORM_INPUTS_TIPS.EMAIL,
                name: EMAIL_NAME,
              }}
            />

            <PasswordInput
              {...{
                isPasswordVisible,
                isFormSending,
                onEyeClick,
                passwordInputRef,
                labelText: PASSWORD_LABEL_TEXT,
                tipText: FORM_INPUTS_TIPS.PASSWORD,
                name: PASSWORD_NAME,
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
