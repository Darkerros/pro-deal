import styles from './section.module.scss';
import {FC, ReactNode} from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({title, children}) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        <h2 className={styles.section__title}>{title}</h2>
        <div className={styles.section__children}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
