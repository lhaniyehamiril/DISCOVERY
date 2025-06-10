import { motion } from "motion/react"
const priceVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, type: 'spring', ease: 'easeInOut', stiffness: 170 }
  }
}

export const BoxPricing = () => {
  return (
    <main className='flex flex-col justify-center items-center mt-5'>
      <section className="flex items-center justify-center flex-col">
        <div className='w-[130px] bg-[--black] h-12 translate-y-5 rounded-2xl text-center flex items-center justify-center leading-7 text-[--green]' >
          <motion.span className='-mt-1'
            variants={priceVariants}
            initial='hidden'
            animate='visible'
          >
            $9 month
          </motion.span>
        </div>
        <div id='box-pricing' className="bg-[--green] w-[86%] phone:w-[350px] p-8 sm:w-[380px] lg:w-[430px] ">
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-[14px] lg:text-[1.1rem]'>
              get access to a personalized
              interactive always accessible map never  lose a memory
            </p>
          </div>
        </div>
      </section>
    </main>

  )
}