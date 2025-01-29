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
    }).then(() => {
        return fetchComments()
    })
}
