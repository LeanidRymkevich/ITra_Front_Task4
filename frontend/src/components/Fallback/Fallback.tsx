import { FC } from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

import Container from '../Container/Container';

const FALLBACK_MESSAGE = 'Oops...Some error occurs!';
const UNKNOWN_ERROR_MESSAGE = 'Unknown error';
const BTN_TEXT = 'Reload';

const Fallback: FC = () => {
  const error = useRouteError();
  const location = useLocation();
  const navigate = useNavigate();

  let message: string;

  if (error instanceof Error) {
    message = error.message || UNKNOWN_ERROR_MESSAGE;
  } else {
    message = UNKNOWN_ERROR_MESSAGE;
  }

  const onBtnClick = (): void => navigate(location.pathname);

  return (
    <Container>
      <div className="py-2">
        <div className="alert alert-danger" role="alert">
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            <p className="d-flex gap-2">
              <i className="bi bi-exclamation-triangle-fill" />
              <span>{`${FALLBACK_MESSAGE}`}</span>
            </p>
            <p className="text-center">{`Description: ${message}.`}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={onBtnClick}
            >
              {BTN_TEXT}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Fallback;
