import {Route, Routes } from "react-router-dom"

import './App.css'

import { CitiesProvider } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import { router } from "./router"
import CustomToaster from "./ui/CustomToaster"


const App = () => {

 const renderRouts = (routes) => {
  routes.map((route , i) => 
  <Route 
    key={i}
    index={route.index}
    path={route.path}
    element={route.element}>
     {route.children && renderRouts(routes.children)}
    </Route>
  )
 }

  return (
    <>
      <AuthProvider>
        <CitiesProvider>
            <Routes>{renderRouts(router)}</Routes>
        </CitiesProvider>
      </AuthProvider>
      <CustomToaster />
    </>
  )
}

export default App
