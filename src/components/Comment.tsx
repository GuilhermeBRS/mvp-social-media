import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react'
import style from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  };

  function handleCommentLikes() {
    setLikeCount((currentCount) => {
      return currentCount + 1
    });
  };

  return (
    <div className={style.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/GuilhermeBRS.png"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Gui Br San</strong>
              <time title='05 de Maio as 12:00' dateTime='2025/05/26 12:00:00'> Cerca de 1h atrás </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <TrashIcon size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCommentLikes}>
            <ThumbsUpIcon />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}