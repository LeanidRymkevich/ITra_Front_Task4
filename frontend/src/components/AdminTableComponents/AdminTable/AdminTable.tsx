import { FC, useRef } from 'react';
import { ADMIN_TABLE_COLUMN_TITLES } from '../../../types/enums';
import { AdminTableRowData } from '../../../types/interfaces';

const AdminTable: FC<AdminTableRowData> = ({ rowsData }) => {
  const selectAllCheckboxRef = useRef(null);

  return (
    <table className="table table-hover table-bordered border-dark table-responsive">
      <thead className="table-dark">
        <tr>
          <th scope="col">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              ref={selectAllCheckboxRef}
            />
          </th>
          <th scope="col">{ADMIN_TABLE_COLUMN_TITLES.NAME}</th>
          <th scope="col">{ADMIN_TABLE_COLUMN_TITLES.EMAIL}</th>
          <th scope="col">{ADMIN_TABLE_COLUMN_TITLES.LAST_LOGIN}</th>
          <th scope="col">{ADMIN_TABLE_COLUMN_TITLES.STATUS}</th>
        </tr>
        <tbody></tbody>
      </thead>
    </table>
  );
};

export default AdminTable;
