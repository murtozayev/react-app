// import React, { FC, useEffect, useRef, } from "react"
// import axe from "@axe-core/react"
// import ReactDOM from "react-dom"
// import { useLocation } from "react-router-dom"

// const RA: FC = () => {

//     if (process.env.NODE_ENV !== "production") {
//         axe(React, ReactDOM, 1000)
//     }

//     // const location = useLocation()


//     // const inpRef = useRef<HTMLInputElement>(null)

//     // useEffect(() => {
//     //     inpRef.current?.focus()
//     // }, [])

//     // useEffect(() => {
//     //     const el = document.querySelector("#route")

//     //     if (el) el.textContent = `You navigated to ${location.pathname}`
//     // }, [])

//     return (
//         <>

//             {/* <div
//                 role="button"
//                 id="route"
//                 aria-live="polite"
//                 className="sr-only"
//             >
//                 Toggle
//             </div> */}

//             {/* <input type="text" ref={inpRef} /> */}

//             {/* <div className="bg-primary text-white" tabIndex={0} role="button" aria-pressed="true" onKeyDown={(e) => e.key === "Enter" && alert("Clicked")}>
//                 Toggle
//             </div> */}
//         </>
//     )
// }

// export default RA