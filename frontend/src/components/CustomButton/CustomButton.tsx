import { FC } from 'react';

import { CustomButtonProps } from '../../types/interfaces';

const CustomButton: FC<CustomButtonProps> = ({
  text,
  icon,
  onClick,
  classes,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={`btn d-flex gap-2 ${classes}`}
      {...{ onClick, disabled }}
    >
      {icon}
      {text}
    </button>
  );
};

export default CustomButton;
