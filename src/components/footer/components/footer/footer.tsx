import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__about}>
          <p className={styles.footer__logo}>PRO-DEAL</p>
          <div className={styles.footer__copyright}>
            <p>© 2022 PRODEAL</p>
            <p>Все права защищены</p>
          </div>
        </div>
        <nav className={styles.footer__nav}>
          <a className={styles.footer__link} href="">Для продавца</a>
          <a className={styles.footer__link} href="">Для покупателя</a>
          <a className={styles.footer__link} href="">Для площадок</a>
        </nav>
        <div>
          <a href="tel:+7 (992) 345-40-87">+7 (992) 345-40-87</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
