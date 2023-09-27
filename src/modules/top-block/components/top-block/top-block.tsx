import Image from "next/image";

import styles from './top-block.module.scss';

import topBlockImage from '@images/top-block.png'

const TopBlock = () => {
  return (
    <section className={styles.topBlock}>
      <div className={styles.topBlock__content}>
        <div>
          <h1 className={styles.topBlock__title}>Сервис безопасных сделок с гарантией доставки</h1>
          <p className={styles.topBlock__description}>Сервис предоставляет 100% защиту денежных средств для покупателей и продавцов при покупках товаров в интернете</p>
        </div>
        <Image src={topBlockImage} alt={'картиннка 2 людей'} quality={100} width={528} height={412}/>
      </div>
    </section>
  );
};

export default TopBlock;
