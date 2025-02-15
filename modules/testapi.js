const link = 'https://wedev-api.sky.pro/api/v1/:sorokovykh/comments'

export const fetchComments = () => {
    return fetch(link)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const appComments = data.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: new Date(comment.date).toLocaleDateString(),
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: false,
                }
            })
            return appComments
        })
}

export const postComment = (name, text) => {
    return fetch(link, {
        method: 'POST',
        body: JSON.stringify({
            text: text.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
            name: name.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        }),
    })
    .then ((response) => {
        if (response.status === 201) {
            return response.json()
        } else {
            if (response.status === 500) {
                throw new Error('Сервер сломался, попробуй позже')
            }
            if (response.status === 400) {
                throw new Error('Имя и комментарий должны быть не короче 3-х символов')
            }
            if (response.status === 404) {
                throw new Error('Не найдено')
            }
                throw new Error('Проверь подключение к интернету')
        }
        
    })
    .then(() => {
        return fetchComments()
    })
    .catch((error) => {

        if (error.message === 'Сервер сломался, попробуй позже') {
            alert(error.message)
        }
        
        if (error.message === 'Имя и комментарий должны быть не короче 3-х символов') {
            alert(error.message)
        }

        if (error.message === 'Не найдено') {
            alert(error.message)
        }

        if (error.message === 'Failed to fetch') {
            alert('Проверьте подключение к интернету и попробуйте снова')
        }
        
    })
    /* .finally (() => {

    }) */
}
