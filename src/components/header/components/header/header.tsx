import Link from "next/link";

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link className={styles.header__logo} href={'/'}>PRO-DEAL</Link>
        <div className={styles.header__navContainer}>
          <a className={styles.header__link} href="#">Как работает</a>
          <a className={styles.header__link} href="#">Кому выгодно</a>
        </div>
        <div>
          <a className={styles.header__tel} href="tel:+7 (800) 350-10-05">+7 (800) 350-10-05</a>
          <p className={styles.header__workTime}>ПН-ПН 09:00-18:00</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
