import { NavLink } from "react-router-dom"
import {active} from '../../ui/activeLink'

export const NavPage = () => {
   
    return (
        <>
            <nav className="flex items-center mt-[2rem] justify-center">
                <ul className="flex select-none justify-center gap-5 text-[15px] lg:gap-8 text-white ">
                    <li><NavLink className={active} to="/login">login</NavLink></li>
                    <li><NavLink className={active} to="/pricing">pricing</NavLink></li>
                    <li><NavLink className={active} to="/product">product</NavLink></li>
                </ul>
            </nav>
        </>

    )
}
