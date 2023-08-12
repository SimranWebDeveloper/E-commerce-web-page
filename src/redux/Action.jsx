export const addBlogFunc = (blog) => {
    return {
        type: 'ADD-BLOG',
        payload:blog
    }
}
export const removeBlogFunc = (id) => {
    return {
        type: 'REMOVE-BLOG',
        payload:id
    }
}
export const editBlogFunc = (editblog) => {
    return {
        type: 'EDIT-BLOG',
        payload:editblog
    }
}
export const allRemoveBlogFunc = () => {
    return {
        type: 'ALL-REMOVE-BLOG',

    }
}