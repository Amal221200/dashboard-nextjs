"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SecureProvider = ({ children }: { children: React.ReactNode }) => {
    const { status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") {
        router.push('/login');
    }
    return (
        <>
            {}
        </>
    );
}

export default SecureProvider;