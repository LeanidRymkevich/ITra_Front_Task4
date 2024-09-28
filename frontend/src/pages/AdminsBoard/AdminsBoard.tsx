import { FC, useEffect, useState } from 'react';

import { ADMIN_STATUS, PAGE_NAMES } from '../../types/enums';
import { AdminsBoardState } from '../../types/types';

import Container from '../../components/Container/Container';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormAlert from '../../components/FormComponents/FormAlert/FormAlert';
import AdminTable from '../../components/AdminTableComponents/AdminTable/AdminTable';

import { getAllAdmins, updateAdmins, deleteAdmins } from '../../api/admins';
import { manageAdminsActions } from '../../utils/table_utils';
import useAuthState from '../../hooks/useAuthState';

const AdminsBoard: FC = (): JSX.Element => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [adminsMap, setAdminsMap] = useState<AdminsBoardState>({});

  const { authState, leaveAdminsPage } = useAuthState();

  const resError = error ? error.message : authState.errorMsg || '';

  useEffect(() => {
    const fetchData = async () => {
      await manageAdminsActions({
        setIsPending,
        setError,
        setAdminsMap,
        leaveAdminsPage,
        action: getAllAdmins,
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBlockBtnClick = async () => {
    const checkedAdmins = Object.values(adminsMap)
      .filter((admin) => admin.checked === true)
      .map((admin) => {
        return { ...admin, status: ADMIN_STATUS.BLOCKED };
      });

    if (!checkedAdmins.length) return;

    await manageAdminsActions(
      {
        setIsPending,
        setError,
        setAdminsMap,
        leaveAdminsPage,
        action: updateAdmins,
      },
      checkedAdmins
    );
  };

  const onUnblockBtnClick = async () => {
    const checkedAdmins = Object.values(adminsMap)
      .filter((admin) => admin.checked === true)
      .map((admin) => {
        return { ...admin, status: ADMIN_STATUS.ACTIVE };
      });

    if (!checkedAdmins.length) return;

    await manageAdminsActions(
      {
        setIsPending,
        setError,
        setAdminsMap,
        leaveAdminsPage,
        action: updateAdmins,
      },
      checkedAdmins
    );
  };

  const onDeleteBtnClick = async () => {
    const checkedAdmins = Object.values(adminsMap).filter(
      (admin) => admin.checked === true
    );

    if (!checkedAdmins.length) return;

    await manageAdminsActions(
      {
        setIsPending,
        setError,
        setAdminsMap,
        leaveAdminsPage,
        action: deleteAdmins,
      },
      checkedAdmins
    );
  };

  const rowCheckboxOnChange = (id: string, checkboxState: boolean): void => {
    const newMap = Object.assign({}, adminsMap);
    newMap[id].checked = checkboxState;
    setAdminsMap(newMap);
  };

  const headerCheckboxOnChange = (checkboxState: boolean): void => {
    const newMap = Object.assign({}, adminsMap);
    Object.values(newMap).forEach((data) => (data.checked = checkboxState));
    setAdminsMap(newMap);
  };

  return (
    <Container>
      <div className="d-flex flex-column gap-2 pt-2">
        <h2 className="display-6 fw-bold">{PAGE_NAMES.ADMINS_BOARD}</h2>

        <div className="d-flex gap-2 flex-wrap">
          <CustomButton
            {...{
              text: 'Block',
              icon: <i className="bi bi-lock-fill"></i>,
              onClick: onBlockBtnClick,
              classes: 'btn-dark',
              disabled: isPending || authState.isAuthenticating,
            }}
          />

          <CustomButton
            {...{
              icon: <i className="bi bi-unlock-fill"></i>,
              onClick: onUnblockBtnClick,
              classes: 'btn-dark',
              disabled: isPending || authState.isAuthenticating,
            }}
          />

          <CustomButton
            {...{
              icon: <i className="bi bi-trash3-fill"></i>,
              onClick: onDeleteBtnClick,
              classes: 'btn-danger',
              disabled: isPending || authState.isAuthenticating,
            }}
          />
        </div>

        {resError && (
          <FormAlert msg={resError} onClick={() => setError(null)} />
        )}

        <div className="table-responsive">
          <AdminTable
            rowsData={Object.values(adminsMap)}
            {...{
              rowCheckboxOnChange,
              isPending: isPending || authState.isAuthenticating,
              headerCheckboxOnChange,
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default AdminsBoard;
