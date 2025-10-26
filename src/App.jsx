import { useRoutes } from "react-router-dom"
import "./index.css"
import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import router from "./router" 
import CustomToaster from "./components/CustomToaster"


const App = () => {
  const element = useRoutes(router)
  return (
    <div>
      <AuthProvider>

        <CitiesProvider>
            {element}
        </CitiesProvider>

      </AuthProvider>
      <CustomToaster />
    </div>
  )
}

export default App

