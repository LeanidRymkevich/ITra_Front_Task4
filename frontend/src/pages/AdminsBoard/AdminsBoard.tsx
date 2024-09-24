import { FC, useEffect, useRef, useState } from 'react';
import Container from '../../components/Container/Container';
import { PAGE_NAMES } from '../../types/enums';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormAlert from '../../components/FormComponents/FormAlert/FormAlert';
import AdminTable from '../../components/AdminTableComponents/AdminTable/AdminTable';
import { AdminsBoardState } from '../../types/types';
import { getAdmins } from '../../services/authentication';
import { AdminData } from '../../types/interfaces';

const AdminsBoard: FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, setIsPending] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [adminsMap, setAdminsMap] = useState<AdminsBoardState>({});

  const onBlockBtnClick = () => console.log('Block');
  const onUnblockBtnClick = () => console.log('Unblock');
  const onDeleteBtnClick = () => console.log('Delete');

  const selectedAdmins = useRef(new Set<string>());

  useEffect(() => {
    const fetchData = async () => {
      const admins = await getAdmins();

      const adminsMap: AdminsBoardState = admins.reduce(
        (obj: AdminsBoardState, admin: AdminData) => {
          obj[admin.id] = { ...admin, checked: false };
          return obj;
        },
        {}
      );
      console.log(adminsMap);
      setAdminsMap(adminsMap);
    };

    fetchData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rowCheckboxOnChange = (id: string, checkboxState: boolean): void => {
    selectedAdmins.current.add(id);
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
              disabled: isPending,
            }}
          />
          <CustomButton
            {...{
              icon: <i className="bi bi-unlock-fill"></i>,
              onClick: onUnblockBtnClick,
              classes: 'btn-dark',
              disabled: isPending,
            }}
          />
          <CustomButton
            {...{
              icon: <i className="bi bi-trash3-fill"></i>,
              onClick: onDeleteBtnClick,
              classes: 'btn-danger',
              disabled: isPending,
            }}
          />
        </div>
        <FormAlert msg={error ? error.message : ''} />
        <div className="table-responsive">
          <AdminTable
            rowsData={Object.values(adminsMap)}
            onChange={() => console.log('Checkbox changed')}
          />
        </div>
      </div>
    </Container>
  );
};

export default AdminsBoard;
