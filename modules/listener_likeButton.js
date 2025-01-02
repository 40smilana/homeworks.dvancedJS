import { comments } from './comments_array.js'

export const likeButtonFunction = (renderFunction) => {
    const likeButton = document.querySelectorAll('.like-button')

    for (const likeButtons of likeButton) {
        likeButtons.addEventListener('click', (no) => {
            console.log('click like button')

            const index = likeButtons.dataset.index
            const comment = comments[index]

            //При клике на иконку лайка цитирование комментария не должно происходить
            no.stopPropagation()

            if ((comments.likes = comment.liked)) {
                comment.likes--
            } else {
                comment.likes++
            }
            comment.liked = !comment.liked

            renderFunction()
        })
    }
}
