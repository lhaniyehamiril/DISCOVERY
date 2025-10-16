import { Route, Routes } from "react-router-dom"
import "./App.css"
import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import router from "./router" // ✅ default import
import CustomToaster from "./ui/CustomToaster"

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
    <>
      <AuthProvider>
        <CitiesProvider>
            <Routes>{renderRoutes(router)}</Routes>
        </CitiesProvider>
      </AuthProvider>
      <CustomToaster />
    </>
  )
}

export default App

