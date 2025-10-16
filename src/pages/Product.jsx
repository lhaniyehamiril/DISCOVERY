import { motion } from "motion/react"

import us from '../assets/us.webp'

import { Box } from '../ui/Box'
import { Heading } from '../ui/Heading'

const imgVariants = {
    hidden: { opacity: 0 , x:-5},
    visible: {
        opacity: 1,
        x:0
    }
}
export const Product = () => {
    return (
        <div className="flex items-center justify-center mt-10">
            <Box className="flex gap-1  flex-col-reverse sm:flex-row  w-[86%] p-3 sm:p-6 phone:w-[370px] sm:w-[470px] justify-center items-center">
                <motion.img src={us} alt='us' className='rounded-3xl w-36 sm:w-40 sm:pl-3'
                    variants={imgVariants}
                    initial='hidden'
                    animate='visible'
                />
                <div  className='flex flex-col gap-3 text-center'>
                    <Heading className='text-xl pt-2 text-[#171c37]'>DISCOVERY </Heading>
                    <p className='pb-2 px-2 text-[14px]'> Using our detailed interactive maps and comprehensive location guides you can capture your travel memories forever</p>
                </div>
            </Box>
        </div>
    )
}


