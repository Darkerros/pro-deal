import styles from './review-section.module.scss';

import { reviews } from "@consts/reviews";

import { CommentCard } from "@components/comment-card";

const ReviewSection = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewSection__content}>
        <h2 className={styles.reviewSection__title}>Отзывы наших клиентов</h2>
        <div className={styles.reviewSection__comentsList}>
          {reviews.map(comment => (<CommentCard key={comment.name} comment={comment}/>))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
