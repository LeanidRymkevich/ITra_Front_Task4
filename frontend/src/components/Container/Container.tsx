import { FC } from 'react';

import { ChildrenOnlyProps } from '../../types/interfaces';

const Container: FC<ChildrenOnlyProps> = ({ children }) => {
  return <div className="container-lg">{children}</div>;
};

export default Container;
