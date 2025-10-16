import {  motion } from "motion/react"

const loaderVariants = {
  visible: {
    rotate: 360,
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 3
    }
  }
}

export const Loader = () => {

  return (
    <motion.div className="flex items-center justify-center h-[33vh] gap-1"
      variants={loaderVariants}
      animate='visible'>
      <div className="w-5 h-5 border-2 border-[--black] rounded-lg"></div>
    </motion.div>
  );
}

