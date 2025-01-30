import { comments } from './comments_array.js'
import { inputComment } from './listener_inputComment.js'

export const commentQuote = () => {
    //В поле ввода автоматически добавляется текст этого комментария и имя автора.
    const allCommentsEl = document.querySelectorAll('.comment')

    for (const allCommentEl of allCommentsEl) {
        allCommentEl.addEventListener('click', () => {
            const thisComment = comments[allCommentEl.dataset.index]
            inputComment.value = `❮❮ ${thisComment.name}: ${thisComment.text} ❯❯`
        })
    }
}
