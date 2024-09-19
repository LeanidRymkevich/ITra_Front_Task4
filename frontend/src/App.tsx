import { FC } from 'react';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <div
      className="bg-secondary"
      data-bs-theme="dark"
      style={{ minHeight: '150vh' }}
    >
      <Header />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        laboriosam numquam voluptates aliquam alias sequi tempore minus
        suscipit, libero, fugit ratione, non repudiandae. Illum aperiam, itaque
        ea perferendis repudiandae totam hic eveniet ipsum aliquid optio?
        Reiciendis eligendi exercitationem possimus beatae a dolorum, repellat
        laudantium earum magni nemo? Eveniet officia accusamus quisquam? Quis,
        veniam? Dicta modi exercitationem repudiandae corporis deleniti nostrum
        hic quia quos. Sit doloribus odit magni placeat natus, consectetur,
        nesciunt tempora suscipit debitis provident sed voluptate, perspiciatis
        molestiae! Corrupti sed tempore ipsam ex. Veritatis eius optio sed
        eaque, voluptas libero atque hic doloribus facilis beatae impedit, ex
        dolorem explicabo?
      </p>
    </div>
  );
};

export default App;
