import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CitiesProvider } from "./contexts/CitiesContext"
import { ProtectedRoute } from "./pages/ProtectedRoute"

import { Product } from "./pages/Product"
import { Pricing } from "./pages/Pricing"
import { Home } from "./pages/Home"
import { PageNotFound } from "./pages/PageNotFound"
import { AppLayout } from "./pages/AppLayout"
import { Login } from "./pages/Login"

import './App.css'
import { CityList } from "./features/city/CityList"
import { CountriesList } from "./features/country/CountriesList"
import { City } from "./features/city/City"
import { Form } from "./features/city/Form"
import { AuthProvider } from "./contexts/FakeAuthContext"
import { FormProvider } from "./contexts/FormContext"
import { Toaster } from "react-hot-toast"


const App = () => {
  return (
    <>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="app" element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>}>
                <Route index element={<Navigate replace to='cities' />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountriesList />} />
                <Route path="form" element={
                  <FormProvider>
                    <Form />
                  </FormProvider>
                } />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
      <Toaster
        position="bottom-center"
        gutter={50}
        containerStyle={{ marginBottom: "1rem" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
          style: {
            borderRadius: '2rem',
            fontSize: "13px",
            maxWidth: "140px",
            padding: "5px 10px",
            backgroundColor: "var(--green)",
            color: "var(--black)",
          },
        }}
      />
    </>
  )
}

export default App
