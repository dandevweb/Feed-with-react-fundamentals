import './styles.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

export function Post(props) {
  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src="https://github.com/dandevweb.png" />
          <div className="authorInfo">
            <strong>Daniel Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de maio ás 8:00' dateTime="2022-05-11 08:00:00">Publicado há 1h</time>
      </header>

      <div className="content">
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className='commentForm'>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Digite aqui seu comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className='commentList'>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )

}