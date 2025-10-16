import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import {Map} from '../components/Map'
import { AppNav } from '../features/navbar/AppNav'
import { Box } from '../ui/Box'


export const AppLayout = () => {
    return (
        <div className="flex items-center mt-9 iphone:mt-6 iphoneFourteen:mt-8 sm:h-[95vh] justify-center flex-col gap-10 lg:gap-5 lg:flex-row ">
          <Box className="relative h-[396px] w-[88%] p-5 phone:w-[410px]">

            <AppNav />

            <main>
              <Outlet />
            </main>

            <Footer />
         </Box>

         <Map />
         
        </div>

    )
}
