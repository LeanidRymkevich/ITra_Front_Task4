import { ChangeEvent, FC } from 'react';

import { AdminRowProps } from '../../../types/interfaces';
import { TABLE_ROW_CHECKBOX_DATA_ATTR } from '../../../types/enums';

const AdminRow: FC<AdminRowProps> = ({
  id,
  firstName,
  lastName,
  email,
  lastLogin,
  status,
  checked,
  rowCheckboxOnChange,
  isPending,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element: HTMLInputElement = event.target;
    const id = element.dataset[TABLE_ROW_CHECKBOX_DATA_ATTR.DOM_PROP];
    if (!id) return;
    rowCheckboxOnChange(id, element.checked);
  };

  return (
    <tr>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          {...{
            [TABLE_ROW_CHECKBOX_DATA_ATTR.ATTRIBUTE]: id,
            onChange,
            checked,
          }}
          disabled={isPending}
        />
      </td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>{lastLogin}</td>
      <td>{status}</td>
    </tr>
  );
};

export default AdminRow;
