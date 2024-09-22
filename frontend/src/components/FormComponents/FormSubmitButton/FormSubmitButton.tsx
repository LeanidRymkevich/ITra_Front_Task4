import { FC } from 'react';

import { FormSubmitButtonProps } from '../../../types/interfaces';

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  isFormSending,
  text,
}) => {
  return (
    <div className="col-12">
      <button
        className="btn btn-primary d-inline-flex gap-1 align-items-center"
        type="submit"
        disabled={isFormSending}
      >
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          hidden={!isFormSending}
        ></span>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default FormSubmitButton;
