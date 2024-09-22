import { FC } from 'react';

import { FormAlertProps } from '../../../types/interfaces';

const FormAlert: FC<FormAlertProps> = ({ msg }) => {
  return msg ? (
    <div
      className="alert alert-danger d-flex gap-2 align-items-center m-0"
      role="alert"
    >
      <i className="bi bi-exclamation-triangle-fill" />
      <span>{msg}</span>
    </div>
  ) : undefined;
};

export default FormAlert;
