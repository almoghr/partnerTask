
const removeCredentialsFromLocalStorage = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('timeStored')
}

const checkIs24HoursPassed = (timeStored) => {
    const now = Date.now()
    const timePassed = now - timeStored
    const wholeDay = 1000*60*60*24
    return timePassed > wholeDay ? false : true 
}
export const checkAuthentication = () => {
    const username = localStorage.getItem('username') || false
    const password = localStorage.getItem('password') || false
    const timeStored = localStorage.getItem('timeStored') || false

    const timeValidCredentials = checkIs24HoursPassed(timeStored)

    if(!timeValidCredentials){
        removeCredentialsFromLocalStorage()
    }
    
    if(!username || !password || !timeStored || !timeValidCredentials){
        return false
    }
    else{
        return true
    }
}