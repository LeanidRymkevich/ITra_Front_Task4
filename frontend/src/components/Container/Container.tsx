import { FC } from 'react';

import { ChildrenOnlyProps } from '../../types/types';

const Container: FC<ChildrenOnlyProps> = ({ children }) => {
  return <div className="container-xxl">{children}</div>;
};

export default Container;
