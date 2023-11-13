import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/CaioLemec.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Lemec</strong>
              <time
                title="November 13, 2023, 10:55 AM"
                dateTime="2023-11-13 10:55:00"
              >
                Published at 1 hour ago
              </time>
            </div>
            <button title="delete">
              <Trash size={24} />
            </button>
          </header>
          <p>Example comment</p>
        </div>
        <footer>
        <button>
          <ThumbsUp /> Like <span>20</span>
        </button>
      </footer>
      </div>
    </div>
    
  );
}
