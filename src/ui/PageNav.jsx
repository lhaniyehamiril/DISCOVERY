import { Link } from "react-router-dom"

export const PageNav = () => {

    return (
        <>
            <nav className="flex items-center mt-[3.5rem] justify-center">
                <ul className="flex select-none justify-center gap-5 text-[15px] lg:gap-8 text-white ">
                    <li><Link className="login" to="/login">login</Link></li>
                    <li><Link to="/pricing">pricing</Link></li>
                    <li><Link to="/product">product</Link></li>
                </ul>
            </nav>
        </>

    )
}
