import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Home = () => {

    const controls = useAnimation()

    const ref = useRef<HTMLButtonElement>(null)

    const isInView = useInView(ref)


    useEffect(() => {
        controls.start({ x: 100 })
    }, [])

    return (
        <motion.button
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
            className="btn btn-success m-5"
            whileHover={{ scale: 1, background: "red" }}
            whileTap={{ rotate: [0, 180 * 3, 0] }}
        >
            Click me
        </motion.button>
    )
}

export default Home