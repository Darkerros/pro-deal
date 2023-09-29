import { FC } from "react";

import { getIcon, IconName } from "@components/card-with-icon/utils/get-icon";

import styles from './card-with-icon.module.scss';


interface CardWithIconProps {
  children: string;
  iconName?: IconName;
}

const CardWithIcon: FC<CardWithIconProps> = ({children, iconName}) => {
  return (
    <div className={styles.cardWithIcon}>
      { getIcon(iconName) }
      <p className={styles.cardWithIcon__text}>{children}</p>
    </div>
  );
};

export default CardWithIcon;
