import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { ADMIN_TABLE_COLUMN_TITLES } from '../../../types/enums';
import { AdminTableProps } from '../../../types/interfaces';

import AdminRow from '../AdminRow/AdminRow';

import { sortRowsByName } from '../../../utils/table_utils';

const AdminTable: FC<AdminTableProps> = ({
  rowsData,
  rowCheckboxOnChange,
  isPending,
  headerCheckboxOnChange,
}) => {
  const [isAscending, setIsAscending] = useState(true);

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = true;
    }
  }, [isPending]);

  const sortBtnOnClick = (): void => {
    setIsAscending(!isAscending);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    headerCheckboxOnChange(event.target.checked);
  };

  return (
    <table className="table table-hover table-bordered border-dark">
      <thead className="table-dark">
        <tr>
          <th>
            <input
              className="form-check-input"
              type="checkbox"
              ref={checkboxRef}
              onChange={onChange}
              data-bs-theme="light"
              disabled={isPending}
            />
          </th>

          <th>
            <div className="d-flex align-items-center justify-content-between">
              <span>{ADMIN_TABLE_COLUMN_TITLES.NAME}</span>
              <span
                className={isPending ? 'no-pointer-events' : 'allow-pointer'}
                onClick={sortBtnOnClick}
              >
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
          <AdminRow
            {...{ ...data, rowCheckboxOnChange, isPending }}
            key={data.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
