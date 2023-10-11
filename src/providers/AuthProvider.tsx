"use client"
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth'

const AuthProvider = ({ children, session }: { children: React.ReactNode, session: Session }) => {

    return (
        <SessionProvider session={session} basePath='/api/auth'>
            {children}
        </SessionProvider>
    )
}
export default AuthProvider