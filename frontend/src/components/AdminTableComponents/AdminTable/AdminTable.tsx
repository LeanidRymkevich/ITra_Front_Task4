import { FC, useRef } from 'react';
import { ADMIN_TABLE_COLUMN_TITLES } from '../../../types/enums';
import { AdminTableProps } from '../../../types/interfaces';
import AdminRow from '../AdminRow/AdminRow';

const AdminTable: FC<AdminTableProps> = ({ rowsData, onChange }) => {
  const selectAllCheckboxRef = useRef<HTMLInputElement | null>(null);
  // selectAllCheckboxRef.current!.indeterminate = true;

  return (
    <table className="table table-hover table-bordered border-dark">
      <thead className="table-dark">
        <tr>
          <th>
            <input
              className="form-check-input bg-light"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              ref={selectAllCheckboxRef}
            />
          </th>
          <th>
            <div>
              <span>{ADMIN_TABLE_COLUMN_TITLES.NAME}</span>
              <span></span>
            </div>
          </th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.EMAIL}</th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.LAST_LOGIN}</th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.STATUS}</th>
        </tr>
      </thead>
      <tbody className="table-secondary">
        {rowsData.map((data) => (
          <AdminRow {...{ ...data, onChange }} key={data.id} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
