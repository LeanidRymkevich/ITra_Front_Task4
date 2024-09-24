import { FC } from 'react';

import { FormAlertProps } from '../../../types/interfaces';

const FormAlert: FC<FormAlertProps> = ({ msg }) => {
  return msg ? (
    <div
      className="alert alert-danger alert-dismissible fade show d-flex gap-2 align-items-center m-0"
      role="alert"
    >
      <i className="bi bi-exclamation-triangle-fill" />
      <span>{msg}</span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  ) : undefined;
};

export default FormAlert;
