import { Outlet } from "react-router-dom"
import { AppNav } from "./AppNav"
import { Footer } from "./Footer"
import { Box } from "./Box"
export const BoxAppLayOut = () => {
    return (
        <Box className="relative h-[396px] w-[88%] p-5 phone:w-[410px]">
            <AppNav />
            <Outlet />
            <Footer />
        </Box>
    )
}
