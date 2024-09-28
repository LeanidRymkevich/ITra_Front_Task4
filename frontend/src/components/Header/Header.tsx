import { FC, MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import { HEADER_LINK_NAMES, PAGE_NAMES } from '../../types/enums';

import Container from '../Container/Container';

import useAuthState from '../../hooks/useAuthState';

import { APP_NAME, PATHS } from '../../constants/constants';

const MENU_TITLE = 'Menu';

const Header: FC = () => {
  const { authState, leaveAdminsPage } = useAuthState();
  const { authToken, adminName, isAuthenticating } = authState;

  const signOutOnClick: MouseEventHandler = (e) => {
    if (isAuthenticating) {
      e.preventDefault();
      return;
    }
    leaveAdminsPage();
  };

  const onLinkClick: MouseEventHandler = (e) => {
    if (isAuthenticating) {
      e.preventDefault();
      return;
    }
  };

  return (
    <header
      className="bg-dark border-bottom sticky-top shadow"
      data-bs-theme="dark"
    >
      <Container>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid p-0">
            <span className="navbar-brand fw-bold">{APP_NAME}</span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              disabled={isAuthenticating}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end w-75"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header px-3 py-3">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  {MENU_TITLE}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  disabled={isAuthenticating}
                ></button>
              </div>

              <div className="offcanvas-body px-3 px-sm-0 py-0">
                <ul className="navbar-nav nav-underline justify-content-end flex-grow-1">
                  <li
                    className="nav-item d-flex align-items-center"
                    style={{ display: authToken ? 'block' : 'none' }}
                  >
                    <span style={{ display: authToken ? 'block' : 'none' }}>
                      <span>Hello, </span>
                      <span className="text-primary-emphasis text-decoration-underline">
                        {authToken && adminName}
                      </span>
                      <span>!</span>
                    </span>
                  </li>
                  <li
                    className="nav-item"
                    style={{ display: !authToken ? 'block' : 'none' }}
                  >
                    <NavLink
                      className="nav-link w-fit-content"
                      aria-current="page"
                      to={PATHS[PAGE_NAMES.SIGN_IN]}
                      onClick={onLinkClick}
                    >
                      {HEADER_LINK_NAMES.SIGN_IN}
                    </NavLink>
                  </li>

                  <li
                    className="nav-item"
                    style={{ display: !authToken ? 'block' : 'none' }}
                  >
                    <NavLink
                      className="nav-link w-fit-content"
                      to={PATHS[PAGE_NAMES.SIGN_UP]}
                      onClick={onLinkClick}
                    >
                      {HEADER_LINK_NAMES.SIGN_UP}
                    </NavLink>
                  </li>

                  <li
                    className="nav-item w-fit-content"
                    style={{ display: authToken ? 'block' : 'none' }}
                  >
                    <NavLink
                      className="nav-link"
                      to={PATHS[PAGE_NAMES.SIGN_IN]}
                      onClick={signOutOnClick}
                    >
                      {HEADER_LINK_NAMES.SIGN_OUT}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
