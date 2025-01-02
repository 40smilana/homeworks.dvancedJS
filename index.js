import { createComment } from './modules/listener_writeButton.js'
import { renderFunction } from './modules/сomment_rendering_function.js'
import { likeButtonFunction } from './modules/listener_likeButton.js'
renderFunction()
createComment(renderFunction)
likeButtonFunction(renderFunction)
