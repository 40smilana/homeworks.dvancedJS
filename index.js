import { createComment } from './modules/listener_writeButton.js'
import { renderFunction } from './modules/сomment_rendering_function.js'
import { likeButtonFunction } from './modules/listener_likeButton.js'
import { fetchComments } from './modules/testapi.js'
import { updComments } from './modules/comments_array.js'
import { commentsLoader } from './modules/comments_loader.js'

commentsLoader()
fetchComments().then((data) => {
    updComments(data)
    renderFunction()
})
//renderFunction()
createComment(renderFunction)
likeButtonFunction(renderFunction)
