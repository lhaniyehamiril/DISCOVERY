import { useEffect } from "react"
import { useAppNavigate } from "../hooks/useAppNavigate"
import { useAuth } from "../contexts/FakeAuthContext"

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const navigate = useAppNavigate()
    useEffect(() => {
        if (!isAuthenticated) navigate('/')
    }, [isAuthenticated, navigate])
    return isAuthenticated ? children : null;
}