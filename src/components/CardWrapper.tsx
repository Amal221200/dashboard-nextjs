"use client"
import { BasicFCProps } from "@/lib/types"
// import { useEffect, useState } from "react"

interface CardWrapperProps extends BasicFCProps {
    additionalClassNames: string | ''
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, additionalClassNames }) => {
    // const [mounted, setMounted]= useState<boolean>(false)
    
    return (
        <div className={`card-shadow p-4 rounded-2xl ${additionalClassNames}`}>
            {children}
        </div>
    )
}
export default CardWrapper