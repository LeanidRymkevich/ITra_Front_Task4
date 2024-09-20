import { FC } from 'react';

import { APP_NAME, PATHS } from '../../constants/constants';
import { HEADER_LINK_NAMES, PAGE_NAMES } from '../../types/enums';
import Container from '../Container/Container';

const MENU_TITLE = 'Menu';

const Header: FC = () => {
  return (
    <header className="bg-dark border-bottom sticky-top" data-bs-theme="dark">
      <Container>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
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
                    <a
                      className="nav-link w-fit-content active disabled"
                      aria-current="page"
                      href={PATHS[PAGE_NAMES.SIGN_IN]}
                    >
                      {HEADER_LINK_NAMES.SIGN_IN}
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link w-fit-content"
                      href={PATHS[PAGE_NAMES.SIGN_UP]}
                    >
                      {HEADER_LINK_NAMES.SIGN_UP}
                    </a>
                  </li>

                  <li className="nav-item w-fit-content">
                    <a className="nav-link" href={PATHS[PAGE_NAMES.SIGN_IN]}>
                      {HEADER_LINK_NAMES.SIGN_OUT}
                    </a>
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
