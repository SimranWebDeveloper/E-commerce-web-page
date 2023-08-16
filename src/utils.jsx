export const autUsers= () => {
    const data=localStorage.getItem('User')
    if (data) return true
    else return false
}

export const autUsersNotAdmin= () => {
    const data=localStorage.getItem('currentUser')
    if (data) return true
    else return false
}