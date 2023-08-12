export const autUsers= () => {
    const data=localStorage.getItem('User')
    if (data) return true
    else return false
}