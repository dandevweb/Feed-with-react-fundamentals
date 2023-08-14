
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import './styles.css'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
  }

  return (
    <div className='comment'>
      <Avatar hasBorder={false} src="https://github.com/daniloaugusto0212.png" />

      <div className='commentBox'>
        <div className='commentContent'>
          <header>
            <div className='authorAndTime'>
              <strong>Devon Mendonça</strong>
              <time title='11 de maio ás 8:00' dateTime="2022-05-11 08:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentátio'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}