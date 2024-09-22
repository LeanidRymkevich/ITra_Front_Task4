import { FC, MouseEventHandler, useState } from 'react';

import { PasswordInputProps } from '../../../types/interfaces';

const PasswordInput: FC<PasswordInputProps> = ({
  isFormSending,
  passwordInputRef,
  labelText,
  tipText,
  name,
  onBlur,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const htmlFor = `validationCustom${name}`;
  const btnId = `inputGroup${name}`;

  const onEyeClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <label htmlFor={htmlFor} className="form-label fw-bold">
        {labelText}
      </label>
      <div className="input-group has-validation">
        <button
          type="button"
          className="input-group-text"
          id={btnId}
          onClick={onEyeClick}
          disabled={isFormSending}
        >
          <i className="bi bi-eye" hidden={isPasswordVisible}></i>
          <i className="bi bi-eye-slash" hidden={!isPasswordVisible}></i>
        </button>
        <input
          name={name}
          type={isPasswordVisible ? 'text' : 'password'}
          className="form-control"
          id={htmlFor}
          aria-describedby={btnId}
          required
          ref={passwordInputRef}
          disabled={isFormSending}
          onBlur={onBlur}
        />
        <div className="invalid-feedback">{tipText}</div>
      </div>
    </div>
  );
};

export default PasswordInput;
