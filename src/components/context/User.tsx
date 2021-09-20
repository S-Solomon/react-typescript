import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext.setUser({
            name: 'john',
            email: 'johndoe@example.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                User name is {userContext.user?.name} 
            </div>
            <div>
                User email is {userContext.user?.email}
            </div>
        </div>
    )
}

// optional chaining with user context happens when we use null as initial value
// We use type assertion in user context to get around this by passing an empty object  as UserContextType
// {} as UserContextType
// this will help us get rid of the null check againt UserContext