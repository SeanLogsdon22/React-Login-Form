import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: (email, password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUsers = localStorage.getItem('isLoggedin')
    
        if (storedUsers === '1') {
          setIsLoggedIn(true)
        }
      }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedin', '1')
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, 
        onLogin: loginHandler,
    }}
    >
        {props.children}</AuthContext.Provider>
}

export default AuthContext