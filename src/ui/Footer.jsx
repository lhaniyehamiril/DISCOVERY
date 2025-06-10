import { useAppNavigate } from "../hooks/useAppNavigate";
import { useAuth } from "../contexts/FakeAuthContext"
export const Footer = () => {
    const navigate = useAppNavigate()
    const { logout } = useAuth();
    const handleClick = () => {
        logout()
        navigate('/')
    }
    return (
        <div className="flex items-center justify-center">
            <footer className="bg-[--black] absolute bottom-[9px] text-center px-[12px] w-[79%] sm:w-[75%] py-[11px] rounded-3xl">
                <div className="flex justify-between items-center">
                    <p className="text-[11px] mobile:text-[13px] lg:text-[15px] text-[--green] pl-[6px]">
                        discovery by hanieamiry
                    </p>
                    <button onClick={handleClick} className=" hover:bg-[#80ff67eb] bg-[--green] text-[12px] px-[15px] text-[--black] py-[5px] rounded-full lg:text-[14px]">logout</button>
                </div>
            </footer>
        </div>
    )
}


