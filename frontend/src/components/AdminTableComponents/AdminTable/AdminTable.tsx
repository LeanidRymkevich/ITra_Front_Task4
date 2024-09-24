import { FC, useRef, useState } from 'react';
import { ADMIN_TABLE_COLUMN_TITLES } from '../../../types/enums';
import { AdminTableProps } from '../../../types/interfaces';
import AdminRow from '../AdminRow/AdminRow';
import { sortRowsByName } from '../../../utils/table_utils';

const AdminTable: FC<AdminTableProps> = ({ rowsData, onChange }) => {
  const [isAscending, setIsAscending] = useState(true);

  const selectAllCheckboxRef = useRef<HTMLInputElement | null>(null);
  // selectAllCheckboxRef.current!.indeterminate = true;

  const sortBtnOnClick = (): void => {
    setIsAscending(!isAscending);
  };

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
            <div className="d-flex align-items-center justify-content-between">
              <span>{ADMIN_TABLE_COLUMN_TITLES.NAME}</span>
              <span className="allow-pointer" onClick={sortBtnOnClick}>
                {isAscending ? (
                  <i className="bi bi-caret-down-square-fill"></i>
                ) : (
                  <i className="bi bi-caret-up-square-fill"></i>
                )}
              </span>
            </div>
          </th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.EMAIL}</th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.LAST_LOGIN}</th>
          <th>{ADMIN_TABLE_COLUMN_TITLES.STATUS}</th>
        </tr>
      </thead>
      <tbody className="table-secondary">
        {sortRowsByName(rowsData, isAscending).map((data) => (
          <AdminRow {...{ ...data, onChange }} key={data.id} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
