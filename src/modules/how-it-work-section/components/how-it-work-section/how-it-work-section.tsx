import styles from './how-it-work-section.module.scss';

import { Section } from "@components/section";
import { CardWithIcon } from "@components/card-with-icon";

const HowItWorkSection = () => {
  return (
    <Section title={'Как это работает?'}>
      <div className={styles.howItWorkSection}>
        <CardWithIcon iconName={'document'}>1. Устная договорённость участников</CardWithIcon>
        <CardWithIcon iconName={'document'}>2. Заполнение данных продавцов</CardWithIcon>
        <CardWithIcon iconName={'document'}>3. Заполнение данных покупателем</CardWithIcon>
        <CardWithIcon iconName={"order"}>4. Депонирование суммы за товар и услуги</CardWithIcon>
        <CardWithIcon iconName={"order"}>5. Передача посылки с заказом перевозчику</CardWithIcon>
        <CardWithIcon iconName={"order"}>6. Доставка груза и проверка получателем</CardWithIcon>
        <CardWithIcon iconName={"wallet"}>7. Оплата продавцом за услугу доставки</CardWithIcon>
        <CardWithIcon iconName={"wallet"}>8. Перевод оплаты продавцу, завершение </CardWithIcon>
      </div>
    </Section>
  );
};

export default HowItWorkSection;
