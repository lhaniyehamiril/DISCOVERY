// img
import earth from '../assets/img-in-box-home.webp'

import { DivSlowContent, ImgEarth } from './Animation'
import { Box } from './Box'
import { Heading } from './Heading'
import { LinkButton } from './Button'


export const BoxHome = () => {
    return (
        <main className='flex items-center justify-center mt-10 flex-col'>
            <Box display='flex' className="w-[86%] sm:w-[550px] h-[220px] sm:h-[240px] rounded-3xl text-center">
                <DivSlowContent className='pt-3 sm:pt-10 flex flex-col gap-3 lg:gap-5 translate-y-16 sm:translate-y-24 '>
                    <Heading className='w-[300px] text-[16px] sm:w-[500px] sm:text-2xl px-2'>You travel the world DISCOVERY  <br /> keeps track of your adventures</Heading>
                    <p className='text-[0.85rem] sm:text-[17px] text-[#2b2b2b] sm:pb-4'>Focuses on preserving  memories <br /> through the map</p>
                </DivSlowContent>
                <ImgEarth src={earth} alt='earth' className='select-none w-[200px] sm:w-[240px] translate-y-12' />
            </Box>
            <div className='text-center translate-y-24 sm:translate-y-32'>
                <LinkButton name='tracking' primary='primary' to='/login'> tracking now</LinkButton>
            </div>
        </main>

    )
}


