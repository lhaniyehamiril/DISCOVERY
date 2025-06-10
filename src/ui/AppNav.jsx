import { NavLink } from "react-router-dom"
import { User } from "./User"
export const AppNav = () => {
    return (
        <nav className="flex items-center gap-1 -mt-2 justify-center">
            <ul className="select-none flex text-[12px] lg:text-[14px] items-center justify-center  w-[60%] sm:w-[55%] gap-3 rounded-full bg-[--black] text-[--green] p-[17px]">
                <li>
                    <NavLink to="cities">cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">countries</NavLink>
                </li>
            </ul>
            <User />
        </nav>
    )
}
