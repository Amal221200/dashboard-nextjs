"use client"
import { BasicFCProps } from '@/lib/types'
import { SessionProvider } from 'next-auth/react';

const AuthProvider: React.FC<BasicFCProps> = ({ children }) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
export default AuthProvider