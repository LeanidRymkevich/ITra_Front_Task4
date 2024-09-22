import { Offcanvas } from 'bootstrap';

const launchOffcanvas = (): void => {
  Array.from(document.querySelectorAll('.offcanvas')).forEach(
    (offcanvasEl) => new Offcanvas(offcanvasEl)
  );
};

const launchBootstrapJS = (): void => {
  launchOffcanvas();
};

export default launchBootstrapJS;
