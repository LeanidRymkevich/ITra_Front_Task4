import { FC } from 'react';

import { EmailInputProps } from '../../../types/interfaces';

const EMAIL_SIGN = '@';

const EmailInput: FC<EmailInputProps> = ({
  isFormSending,
  labelText,
  tipText,
  name,
}) => {
  const htmlFor = `validationCustom${name}`;
  const spanId = `inputGroup${name}`;

  return (
    <div>
      <label htmlFor={htmlFor} className="form-label fw-bold">
        {labelText}
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text" id={spanId}>
          {EMAIL_SIGN}
        </span>
        <input
          name={name}
          type="email"
          className="form-control"
          id={htmlFor}
          aria-describedby={spanId}
          required
          disabled={isFormSending}
        />
        <div className="invalid-feedback">{tipText}</div>
      </div>
    </div>
  );
};

export default EmailInput;
