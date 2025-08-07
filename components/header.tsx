import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center pt-16 max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center justify-between text-center w-full max-w-[1600px] mx-auto gap-4 md:flex-row lg:flex-row">
      <Image
          src="https://camel-ai.github.io/camel_asset/logo/camel_logo.svg"
          alt="CAMEL AI Logo"
          className="-ml-4"
          width={240}
          height={240}
        />
        <div className="text-4xl font-bold mr-2 mt-4 text-neon-700">
          <motion.div 
            className="flex flex-col gap-2 items-center"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              CAMEL-AI Multi-Agent System Stack
            </motion.span>
          </motion.div>
        </div>
      </div>
    </header>
  )
}