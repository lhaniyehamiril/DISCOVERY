import { Route, Routes } from "react-router-dom"
import "./index.css"
import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import router from "./router" // ✅ default import
import CustomToaster from "./components/CustomToaster"


const App = () => {
  const renderRoutes = (routes) => {
    return routes?.map((route, i) => (
      <Route
        key={i}
        index={route.index}
        path={route.path}
        element={route.element}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ))
  }


  return (
    <div>
     
      <AuthProvider>
        <CitiesProvider>
            <Routes>{renderRoutes(router)}</Routes>
        </CitiesProvider>
      </AuthProvider>
      <CustomToaster />
    </div>
  )
}

export default App

