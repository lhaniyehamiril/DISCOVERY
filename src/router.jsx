import { Navigate } from "react-router-dom"


import { AppLayout } from "./pages/AppLayout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { PageNotFound } from "./pages/PageNotFound"
import { Pricing } from "./pages/Pricing"
import { Product } from "./pages/Product"
import { ProtectedRoute } from "./pages/ProtectedRoute"

import { City } from "./features/city/City"
import { CityList } from "./features/city/CityList"
import { Form } from "./features/city/Form"
import { CountriesList } from "./features/country/CountriesList"

import { FormProvider } from "./contexts/FormContext"


export const router = [
    { 
      path:'/' ,
      index: true, 
      element: <Home />
     } ,
    { 
      path:'login' ,
      element: <Login />
     } ,
    { 
      path:'product' ,
      element: <Product />
     } ,
    { 
      path:'pricing' ,
      element: <Pricing />
     } ,
    { 
      path:'app' ,
      element: ( 
           <ProtectedRoute>
           <AppLayout />
          </ProtectedRoute>
        ),
        children: [
         {index: true , element: <Navigate replace to={'cities'} />},
         {path: 'cities', element: <CityList />},
         {path: "cities/:id", element: <City /> },
         {path: "countries", element: <CountriesList /> },
         {
           path: "form",
           element: (
          <FormProvider>
            <Form />
          </FormProvider>
         ),
         },
        ]
      },
     {
        path: '*',
        element: <PageNotFound />
     }
]