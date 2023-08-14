import './styles.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({ post }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!',
  ])
  const [newCommentText, setNewCommentText] = useState('')

  console.log(newCommentText)

  const author = post.author
  const content = post.content

  const publishedAt = post.publishedAt
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Digite um comentário, por favor!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  function isNewCommentEmpty() {
    return newCommentText.length === 0
  }

  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="authorInfo">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className="content">

        {content.map(row => {
          if (row.type === 'paragraph') {
            return <p key={row.content}>{row.content}</p>
          }

          if (row.type === 'link') {
            return <p key={row.content}><a href="#">{row.content}</a></p>
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className='commentForm'>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Digite aqui seu comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className='commentList'>

        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}

      </div>

    </article>
  )

}