import { FC, useState } from 'react';
import Container from '../../components/Container/Container';
import { PAGE_NAMES } from '../../types/enums';
import CustomButton from '../../components/CustomButton/CustomButton';

const AdminsBoard: FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOperationPending, setIsOperationPending] = useState<boolean>(false);

  const onBlockBtnClick = () => console.log('Block');
  const onUnblockBtnClick = () => console.log('Unblock');
  const onDeleteBtnClick = () => console.log('Delete');

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
              disabled: isOperationPending,
            }}
          />
          <CustomButton
            {...{
              text: 'Unblock',
              icon: <i className="bi bi-unlock-fill"></i>,
              onClick: onUnblockBtnClick,
              classes: 'btn-dark',
              disabled: isOperationPending,
            }}
          />
          <CustomButton
            {...{
              text: 'Delete',
              icon: <i className="bi bi-trash3-fill"></i>,
              onClick: onDeleteBtnClick,
              classes: 'btn-danger',
              disabled: isOperationPending,
            }}
          />
        </div>
        <table></table>
      </div>
    </Container>
  );
};

export default AdminsBoard;
