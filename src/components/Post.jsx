import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/CaioLemec.png"
          />
          <div className={styles.authorInfo}>
            <strong>Caio Lemec</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="November 13, 2023, 10:55 AM"
          dateTime="2023-11-13 10:55:00"
        >
          Published at 1 hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          culpa rem consequuntur aliquam voluptate ipsam odit velit, quia illo,
          quos rerum temporibus nemo voluptates quas soluta consectetur amet,
          fugit vero!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          totam, quidem officia molestias perferendis sint quas placeat dolores
          provident eaque sequi rem, atque impedit necessitatibus. Culpa placeat
          atque ad debitis!
        </p>
        <p>
            <a href="">Any text link</a>{' '}
        </p>
        <p>
            <a href="">#Example 1</a>{' '}
            <a href="">#Example 2</a>{' '}
            <a href="">#Example 3</a>
        </p>
      </div>
    </article>
  );
}
