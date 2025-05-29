import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, type PostType } from "./components/Post.tsx";

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GuilhermeBRS.png',
      name: 'Guilherme Brunholi',
      role: 'Software Eng.'
    },
    content: [
      { id: 4, type: 'paragraph', content: 'Fala galeraa 👋 ' },
      { id: 5, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { id: 6, type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat.'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋 ' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { id: 3, type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-05-10 20:00:00'),
  }
];

function App() {
 return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
    </div>
  </div>
 );
}

export default App
