import { Outlet } from 'react-router-dom'
import {Logo} from '../components/Logo'
import {NavPage} from '../features/navbar/NavPage'

export const PublicLayout = () => {
  return (
    <div>
      <Logo />
      <NavPage />

       <main>  
        <Outlet /> 
       </main>
       
    </div>
  )
}

