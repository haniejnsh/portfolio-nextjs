"use client"

import { useAuthStore } from "@/store/useAuthStore"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function AuthSync() {
    const { data: session, status } = useSession()
    const setUser = useAuthStore((state) => state.setUser)
    const logout = useAuthStore((state) => state.logout);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setUser(session.user);
        } else if (status === "unauthenticated") {
            logout();
        }
    }, [session, status, setUser, logout]);
    
    return null
}
