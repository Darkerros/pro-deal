import { FC } from "react";
import { StaticImageData } from "next/image";

import styles from './comment-card.module.scss'

import CommentCardAvatar from "../comment-card-avatar/comment-card-avatar";

interface CommentCardProps {
  comment: {
    name: string;
    avatar: string | StaticImageData;
    description: string;
  }
}

const CommentCard: FC<CommentCardProps> = (props) => {
  const {
    comment: {
      name,
      avatar,
      description
    }
  } = props;

  return (
    <div className={styles.commentCard}>
      <div className={styles.commentCard__head}>
        <CommentCardAvatar avatar={avatar}/>
        <p className={styles.commentCard__name}>{name}</p>
      </div>
      <p className={styles.commentCard__description}>{description}</p>
    </div>
  );
};

export default CommentCard;
