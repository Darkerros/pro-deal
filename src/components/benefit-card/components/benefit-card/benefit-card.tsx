import { FC } from "react";

import styles from './benefit-card.module.scss'

import BenefitCardBenefits from "@components/benefit-card/components/benefit-card-benefits/benefit-card-benefits";

interface BenefitCardProps {
  id?: string;
  title: string;
  benefits: string[];
}

const BenefitCard: FC<BenefitCardProps> = ({ id, title, benefits }) => {
  return (
    <div className={styles.benefitCard} id={id}>
      <p className={styles.benefitCard__title}>{title}</p>
      <BenefitCardBenefits benefits={benefits}/>
    </div>
  );
};

export default BenefitCard;
