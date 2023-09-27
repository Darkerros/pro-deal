import {FC} from "react";

import styles from './benefit-card-benefits.module.scss';

import benefitIcon from '@images/benefit-icon.png'
import Image from "next/image";

interface BenefitCardBenefitsProps {
  benefits: string[];
}

const BenefitCardBenefits: FC<BenefitCardBenefitsProps> = ({benefits}) => {
  return (
    <div className={styles.benefits}>
      {benefits.map(benefit =>
        (<p className={styles.benefits__benefit}>
          <Image src={benefitIcon} alt={'иконка преимущества'} width={24} height={24}/>
          {benefit}
        </p>)
      )}
    </div>
  );
};

export default BenefitCardBenefits;
