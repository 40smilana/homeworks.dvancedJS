export const commentsLoader = () => {
    const findList = document.querySelector('.comments')
    findList.innerHTML = 'Пожалуйста, подождите, загружаю пкомментарии ...'
}

export const newCommentLoader = () => {
    const findForm = document.querySelector('.loader-form')
    findForm.style.display = 'block'

    const addForm = document.querySelector('.add-form')
    addForm.style.display = 'none'
}
