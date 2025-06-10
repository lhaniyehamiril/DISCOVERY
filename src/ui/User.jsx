// img
import person from "../assets/person.webp"

import { useAuth } from "../contexts/FakeAuthContext";

export const User = () => {
    const { user } = useAuth();
    return (
        <div className="flex gap-[6px] bg-[--black]  items-center justify-start rounded-full py-[9px] w-[98px] px-4">
            <img src={person} alt={user.name} className="select-none rounded-full w-6" />
            <span className=" text-[--green] text-sm">{user.name}</span>
        </div>
    )
}