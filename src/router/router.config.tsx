import * as RT from "@tanstack/react-router"
import React from "react"
import * as DBC from "./pages/index"
import ProtectAuth from "./auth/ProtectAuth"

const rootRoute = RT.createRootRoute()

async function getFromJSNPLDR() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    return res.json()
}

const dashboard = RT.createRoute({
    getParentRoute: () => rootRoute,
    path: "/dashboard",
    component: () => (
        <React.Suspense fallback={<h1>Loading component...</h1>}>
            <DBC.Dashboard />
            <RT.Outlet />
        </React.Suspense>
    )
})

export const users = RT.createRoute({
    getParentRoute: () => rootRoute,
    path: "/users",
    component: () => (
        <React.Suspense fallback={<h1>Loading contents...</h1>}>
            <ProtectAuth>
                <DBC.Users />
            </ProtectAuth>
        </React.Suspense>
    ),
    loader: () => getFromJSNPLDR(),
    validateSearch: (search: { name: string }) => ({
        name: search.name ?? ""
    })
})

const auth = RT.createRoute({
    getParentRoute: () => rootRoute,
    path: "/auth",
    component: () => <h1>You have to auth</h1>
})

const rootTree = rootRoute.addChildren([dashboard.addChildren([users]), auth])

const router = new RT.Router({ routeTree: rootTree })

export default router