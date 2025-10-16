import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'logout':
            return { initialState }
        default: throw new Error('unKnown action')
    }
}


const FAKE_USER = {
    name: 'mary',
    email: 'mary@example.com',
    password: 'levwopr',
}

const AuthProvider = ({ children }) => {
    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);
    const login = (email, password) => {
        if (email === FAKE_USER.email && password === FAKE_USER.password) dispatch({ type: 'login', payload: FAKE_USER })
    }
    const logout = () => {
        dispatch({ type: 'logout' });
    }
    return <AuthContext.Provider value={{
        user,
        isAuthenticated,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('AuthContext was used outside AuthProvider')
    return context
}

export { AuthProvider, useAuth }