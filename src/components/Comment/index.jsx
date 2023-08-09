
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import './styles.css'

export function Comment() {
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

            <button title='Deletar comentátio'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}