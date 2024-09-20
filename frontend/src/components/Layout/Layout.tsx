import { FC } from 'react';
import Header from '../Header/Header';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLocation, Outlet } from 'react-router-dom';
import favicon from '../../assets/clipboard.png';
import { getPageNameByPath } from '../utils/paths_utils';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const pageName = getPageNameByPath(pathname);

  return (
    <HelmetProvider>
      <Helmet title={`${pageName}`} link={[{ rel: 'icon', href: favicon }]} />
      <Header />
      <main className="bg-secondary flex-grow-1" data-bs-theme="dark">
        <Outlet />
      </main>
    </HelmetProvider>
  );
};

export default Layout;
