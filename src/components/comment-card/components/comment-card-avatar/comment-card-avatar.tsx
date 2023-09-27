import { FC } from "react";
import { StaticImageData } from "next/image";

import Image from "next/image";

import styles from './comment-card-avatar.module.scss'

interface CommentCardAvatarProps {
  avatar: string | StaticImageData;
}

const CommentCardAvatar: FC<CommentCardAvatarProps> = ({avatar}) => {
  return (
    <div className={styles.commentCardAvatar}>
      <Image src={avatar} alt={'картинка комментария'} width={60} height={60}/>
    </div>
  );
};

export default CommentCardAvatar;
