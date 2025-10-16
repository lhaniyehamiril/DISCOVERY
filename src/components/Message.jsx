import { motion } from "motion/react"

const paragraphVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1, scale: 1,
        transition: { type: 'spring', stiffness: 190 }
    }
}

export const Message = ({ message }) => {
    return (
        <div className=" text-center flex items-center justify-center text-[13px] lg:text-[15px] h-[27vh] sm:h-[20vh] lg:h-[32vh]">
            <motion.p className='w-48 lg:w-52'
                variants={paragraphVariant}
                initial="hidden"
                animate="visible"
                transition={{}}
            >{message}</motion.p>
        </div>
    )
}

