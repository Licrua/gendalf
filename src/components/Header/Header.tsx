import './Header.css';
import { HeaderBurger } from './HeaderBurger';
import { HeaderButtons } from './HeaderButtons';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import { HeaderSearch } from './HeaderSearch';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <HeaderSearch />
      <HeaderButtons />
      <HeaderLogo />
      <button type="button" className="header__profile header__profile-mobile" />
      <HeaderBurger />
      <HeaderMenu />
      <a href="#sobes" className="header__button header__link">
        Запись на собеседование
      </a>
    </div>
  </header>
);

export default Header;
