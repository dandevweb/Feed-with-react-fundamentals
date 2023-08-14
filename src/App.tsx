import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./styles/App.module.css"
import "./styles/global.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dandevweb.png",
      name: "Danilo Augusto",
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galeraa 👋",
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      {
        type: 'link',
        content: " jane.design / doctorcare"

      },
    ],
    publishedAt: new Date("2021-06-27 9:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60052506?v=4",
      name: "Jhon de Souza",
      role: 'Front Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galeraa 👋",
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀 2",
      },
      {
        type: 'link',
        content: " jane.design / doctorcare"

      },
    ],
    publishedAt: new Date("2021-06-25 10:35:00"),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return <Post key={post.id} post={post} />
          })}

        </main>

      </div>
    </>
  )
}


