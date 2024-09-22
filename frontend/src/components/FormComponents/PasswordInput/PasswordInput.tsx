import { FC } from 'react';

import { PasswordInputProps } from '../../../types/interfaces';

const PasswordInput: FC<PasswordInputProps> = ({
  isPasswordVisible,
  onEyeClick,
  isFormSending,
  passwordInputRef,
  labelText,
  tipText,
  name,
}) => {
  const htmlFor = `validationCustom${name}`;
  const btnId = `inputGroup${name}`;

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
          type="password"
          className="form-control"
          id={htmlFor}
          aria-describedby={btnId}
          required
          ref={passwordInputRef}
          disabled={isFormSending}
        />
        <div className="invalid-feedback">{tipText}</div>
      </div>
    </div>
  );
};

export default PasswordInput;
