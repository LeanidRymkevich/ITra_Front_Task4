import { FC } from 'react';

import { TextInputProps } from '../../../types/interfaces';

const TextInput: FC<TextInputProps> = ({
  isFormSending,
  labelText,
  tipText,
  name,
  type,
  signElement,
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
          {signElement}
        </span>
        <input
          name={name}
          type={type}
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

export default TextInput;
