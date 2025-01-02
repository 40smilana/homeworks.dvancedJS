import { comments } from './comments_array.js'
import { inputComment } from './listener_inputComment.js'
import { inputName } from './listener_inputName.js'

export const createComment = (renderFunction) => {
    const writeButton = document.getElementById('write_button')

    writeButton.addEventListener('click', () => {
        console.log('click write button')

        //Нельзя оставить поля комментария и имени пустыми
        inputName.classList.remove('error')
        inputComment.classList.remove('error')

        if (
            (inputName.value === '' && inputComment.value === '') ||
            inputName.value === '' ||
            inputComment.value === ''
        ) {
            inputName.classList.add('error')
            inputComment.classList.add('error')
            return
        }

        //В шаблонную строку комментария подставляем значения полей имени и комментария, Обработка HTML-разметки replaceAll
        const userComment = {
            name: inputName.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
            date: new Date(),
            text: inputComment.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
            likes: 0,
        }

        inputName.value = ''
        inputComment.value = ''

        comments.push(userComment)

        renderFunction()
    })
}
