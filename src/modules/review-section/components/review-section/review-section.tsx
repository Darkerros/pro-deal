import styles from './review-section.module.scss';

import { reviews } from "@consts/reviews";

import { Section } from "@components/section";
import { CommentCard } from "@components/comment-card";

const ReviewSection = () => {
  return (
    <Section title={'Отзывы наших клиентов'}>
      <div className={styles.reviewSection__comentsList}>
        {reviews.map(comment => (<CommentCard key={comment.name} comment={comment}/>))}
      </div>
    </Section>
  );
};

export default ReviewSection;
