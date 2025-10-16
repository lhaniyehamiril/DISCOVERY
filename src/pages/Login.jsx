import { useEffect, useState } from "react"
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useAuth } from "../contexts/FakeAuthContext";

import { DivSlowContent } from "../ui/Animation";
import { Input } from '../ui/Input';
import { Box } from '../ui/Box'
import { IconHappy } from '../icon/IconHappy';
import { Button } from "../components/Button";


export const Login = () => {
    const [password, setPassword] = useState("levwopr");
    const [email, setEmail] = useState("mary@example.com");
    const navigate = useAppNavigate()
    const { login, isAuthenticated } = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) return login(email, password)
    }
    useEffect(() => {
        if (isAuthenticated) navigate('/app', {
            replace: true
        })
    }, [isAuthenticated, navigate])
    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-10 mt-12">
            <Box display='flex' className='w-[86%] phone:w-[400px] p-9 sm:w-[47%] lg:w-[28%]'>
                <DivSlowContent className="pb-5">
                    <IconHappy />
                </DivSlowContent>
                <div className="flex flex-col gap-5 items-center justify-center ">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="email" />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />
                </div>
            </Box>
            <div className="-mt-6">
                <Button name='login' primary='primary'>login</Button>
            </div>
        </form >
    )
}
