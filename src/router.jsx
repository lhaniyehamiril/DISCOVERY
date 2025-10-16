import { Navigate } from "react-router-dom"


import { AppLayout } from "./layouts/AppLayout"
import {PublicLayout} from "./layouts/PublicLayout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { NotFound } from "./pages/NotFound"
import { Pricing } from "./pages/Pricing"
import { Product } from "./pages/Product"
import { ProtectedRoute } from "./pages/ProtectedRoute"

import { City } from "./features/city/City"
import { CityList } from "./features/city/CityList"
import { Form } from "./features/city/Form"
import { CountriesList } from "./features/country/CountriesList"

import { FormProvider } from "./contexts/FormContext"


 const router = [
  {
    element: <PublicLayout /> ,
    children : [
       { path: '/', element: <Home />},
       { path:'login', element: <Login />},
       { path:'product', element: <Product />},
       { path:'pricing', element: <Pricing />},
     ]
    }
     ,
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
        element: <NotFound />
     }
]

export default router