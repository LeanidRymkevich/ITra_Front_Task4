import { FC } from 'react';

import { FormAlertProps } from '../../../types/interfaces';

const FormAlert: FC<FormAlertProps> = ({ msg, onClick }) => {
  return (
    <div
      className="alert alert-danger fade show d-flex gap-2 align-items-center m-0"
      role="alert"
    >
      <i className="bi bi-exclamation-triangle-fill" />
      <span className="flex-grow-1">{msg}</span>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default FormAlert;
