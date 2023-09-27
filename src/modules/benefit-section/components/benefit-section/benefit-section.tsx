import styles from './benefit-section.module.scss'

import { BenefitCard } from "@components/benefit-card";

import { buyerBenefits } from "@consts/buyer-benefits";
import { sellerBenefits } from "@consts/seller-benefits";
import { platformBenefits } from "@consts/platform-benefits";

const BenefitSection = () => {
  return (
    <section className={styles.benefitSection}>
      <div className={styles.benefitSection__content}>
        <BenefitCard title={'Покупателям'} benefits={buyerBenefits}/>
        <BenefitCard title={'Продавцам'} benefits={sellerBenefits}/>
        <BenefitCard title={'Площадкам'} benefits={platformBenefits}/>
      </div>
    </section>
  );
};

export default BenefitSection;
