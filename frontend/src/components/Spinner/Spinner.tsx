import { FC } from 'react';

import './spinner.scss';

const Spinner: FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 position-absolute bg-secondary z-3 opacity-75">
      <div
        className="spinner spinner-border text-primary w-25 h-auto"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
