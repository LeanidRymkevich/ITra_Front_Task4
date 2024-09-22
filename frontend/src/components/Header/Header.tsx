import { FC } from 'react';

import { APP_NAME, PATHS } from '../../constants/constants';
import { HEADER_LINK_NAMES, PAGE_NAMES } from '../../types/enums';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

// TODO add links hiding relative to auth state, add name displaying, and handler to SignOut Link

const MENU_TITLE = 'Menu';

const Header: FC = () => {
  return (
    <header className="bg-dark border-bottom sticky-top" data-bs-theme="dark">
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
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end w-50"
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
                ></button>
              </div>

              <div className="offcanvas-body px-3 px-sm-0 py-0">
                <ul className="navbar-nav nav-underline justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link w-fit-content"
                      aria-current="page"
                      to={PATHS[PAGE_NAMES.SIGN_IN]}
                    >
                      {HEADER_LINK_NAMES.SIGN_IN}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link w-fit-content"
                      to={PATHS[PAGE_NAMES.SIGN_UP]}
                    >
                      {HEADER_LINK_NAMES.SIGN_UP}
                    </NavLink>
                  </li>

                  <li className="nav-item w-fit-content">
                    <NavLink
                      className="nav-link"
                      to={PATHS[PAGE_NAMES.SIGN_IN]}
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
