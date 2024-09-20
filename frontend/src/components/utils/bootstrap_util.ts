import * as bootstrap from 'bootstrap';

const launchOffcanvas = (): void => {
  Array.from(document.querySelectorAll('.offcanvas')).map(
    (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
  );
};

const launchBootstrapJS = (): void => {
  launchOffcanvas();
};

export default launchBootstrapJS;
