import { comments } from './comments_array.js'
import { commentQuote } from './listener_commentQuote.js'
import { likeButtonFunction } from './listener_likeButton.js'

//По клику на кнопку «Добавить» создаем шаблонную строку комментария с помощью обратных кавычек
export const renderFunction = () => {
    const list = document.querySelector('.comments')

    list.innerHTML = comments
        .map((comment, index) => {
            return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date.toLocaleDateString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button data-index="${index}" class="like-button ${comment.liked ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li>
        `
        })
        .join('')

    likeButtonFunction(renderFunction)
    commentQuote()
}
