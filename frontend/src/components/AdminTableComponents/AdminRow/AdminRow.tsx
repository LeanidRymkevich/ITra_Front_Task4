import { FC } from 'react';

import { AdminRowProps } from '../../../types/interfaces';

import { CHECKBOX_DATA_ID_ATTRIBUTE } from '../../../constants/constants';

const AdminRow: FC<AdminRowProps> = ({
  id,
  name,
  email,
  lastLogin,
  status,
  checked,
  onChange,
}) => {
  return (
    <tr>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          checked={checked}
          onChange={onChange}
          {...{ [CHECKBOX_DATA_ID_ATTRIBUTE]: id }}
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{lastLogin}</td>
      <td>{status}</td>
    </tr>
  );
};

export default AdminRow;
