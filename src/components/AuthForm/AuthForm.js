import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
const AuthForm = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector((state) => state.auth.user);

    const handleLogin = () => {
        if(username === auth.username && password === auth.password){
            const timeStored = Date.now()
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('timeStored', timeStored)
            setIsLoggedIn(true)
        } else{
            setError('credentials are not valid')
        }
    }

    useEffect(()=>{setError('')},[username, password])

    return (
        <div>
            <label>username</label>
            <input type="text" placeholder="enter your username here" onChange={(e) => setUsername(e.target.value)}/>
            <label>username</label>
            <input type="password" placeholder="enter your password here" onChange={(e) => setPassword(e.target.value)}/> 
            <button type="submit" onClick={handleLogin}>LOGIN</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default AuthForm
