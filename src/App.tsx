import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/CaioLemec.png",
      name: "Caio Lemec",
      role: "Web Developer",
    },
    content: [
      {
        id: "content-1",
        type: "paragraph",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        culpa rem consequuntur aliquam voluptate ipsam odit velit, quia illo,
        quos rerum temporibus nemo voluptates quas soluta consectetur amet,
        fugit vero!`,
      },
      {
        id: "content-2",
        type: "paragraph",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        culpa rem consequuntur aliquam voluptate ipsam odit velit, quia illo,
        quos rerum temporibus nemo voluptates quas soluta consectetur amet,
        fugit vero!`,
      },
      { id: "link-1", type: "link", content: `Any text link` },
    ],
    publishedAt: new Date("2023-11-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Sênior Web Developer",
    },
    content: [
      {
        id: "content-1",
        type: "paragraph",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        culpa rem consequuntur aliquam voluptate ipsam odit velit, quia illo,
        quos rerum temporibus nemo voluptates quas soluta consectetur amet,
        fugit vero!`,
      },
      {
        id: "content-2",
        type: "paragraph",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        culpa rem consequuntur aliquam voluptate ipsam odit velit, quia illo,
        quos rerum temporibus nemo voluptates quas soluta consectetur amet,
        fugit vero!`,
      },
      { id: "link-1", type: "link", content: `Any text link` },
    ],
    publishedAt: new Date("2023-11-11 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
