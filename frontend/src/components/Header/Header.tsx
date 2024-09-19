import { FC } from 'react';

import { APP_NAME, PATHS } from '../../constants/constants';
import { HEADER_LINK_NAMES, PAGE_NAMES } from '../../types/enums';
import Container from '../Container/Container';
import { Offcanvas } from 'bootstrap';

const Header: FC = () => {
  return (
    <header className="bg-dark border-bottom sticky-top" data-bs-theme="dark">
      <Container>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <span className="navbar-brand">{APP_NAME}</span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={PATHS[PAGE_NAMES.SIGN_IN]}
                  >
                    {HEADER_LINK_NAMES.SIGN_IN}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href={PATHS[PAGE_NAMES.SIGN_UP]}>
                    {HEADER_LINK_NAMES.SIGN_UP}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href={PATHS[PAGE_NAMES.SIGN_IN]}>
                    {HEADER_LINK_NAMES.SIGN_OUT}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

const offcanvasElementList = document.querySelectorAll('.offcanvas');
[...offcanvasElementList].forEach((offcanvasEl) => new Offcanvas(offcanvasEl));
// TODO make menu on canvas
