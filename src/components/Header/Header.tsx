import { FC } from 'react';
import avatarUrl from '../../images/header-avatar.jpg';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div>
          <img className='header__avatar' src={avatarUrl} alt='Аватар' />
        </div>
        <div>
          <h1 className='header__title'>Данил Мысенко</h1>
          <nav className='header__nav'>
            <ul className='header__links'>
              <li className='header__links-item'>
                <a
                  className='header__link'
                  href='https://t.me/derton8'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='header__link-icon'></svg>
                  Telegram
                </a>
              </li>
              <li className='header__links-item'>
                <a
                  className='header__link'
                  href='https://github.com/Derton8'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='header__link-icon'></svg>
                  GitHub
                </a>
              </li>
              <li className='header__links-item'>
                <a
                  className='header__link'
                  href='https://disk.yandex.ru/i/ssyPft8bOl0fyQ'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='header__link-icon'></svg>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
