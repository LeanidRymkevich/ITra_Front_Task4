import { FC } from 'react';

import { CustomFormProps } from '../../../types/interfaces';

const CustomForm: FC<CustomFormProps> = ({ children, onSubmit }) => {
  return (
    <form
      className="needs-validation d-flex flex-column gap-3"
      noValidate={true}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default CustomForm;
