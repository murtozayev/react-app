import { useNavigate } from "@tanstack/react-router"
import { ReactNode, useEffect } from "react"

const ProtectAuth = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()

    const isAuth = true

    useEffect(() => {
        if (!isAuth) {
            navigate({ to: "/auth", replace: true })
        }
    }, [isAuth])

    if (!isAuth) return null

    return <> {children} </>
}

export default ProtectAuth