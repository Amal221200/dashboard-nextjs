"use client"

import { BasicFCProps } from "@/lib/types"
import { useEffect, useState } from "react"

const ClientOnly: React.FC<BasicFCProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <>
            {children}
        </>
    )
}
export default ClientOnly