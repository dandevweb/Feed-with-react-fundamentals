import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./styles/App.module.css"
import "./styles/global.css"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          <Post
            author="Danilo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas error at voluptates reiciendis sapiente assumenda! Laboriosam, rerum ducimus adipisci iure vel blanditiis quod sunt, saepe soluta minus asperiores veritatis facere."
          />

          <Post
            author="Danilo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas error at voluptates reiciendis sapiente assumenda! Laboriosam, rerum ducimus adipisci iure vel blanditiis quod sunt, saepe soluta minus asperiores veritatis facere."
          />


        </main>

      </div>
    </>
  )
}


