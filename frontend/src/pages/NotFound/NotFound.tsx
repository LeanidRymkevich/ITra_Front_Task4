import { FC } from 'react';

const MESSAGE_404 = '404';
const DESCRIPTION_404 = 'Page Not Found';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className="py-3">
      <h2 className="text-center display-1 fw-bold">{MESSAGE_404}</h2>
      <h3 className="text-center display-2 fw-bold">{DESCRIPTION_404}</h3>
    </div>
  );
};

export default NotFound;
