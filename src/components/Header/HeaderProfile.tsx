"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa'
const HeaderProfile = () => {
    const { data, status } = useSession()
    // console.log(data);
    console.log(data?.user?.image);
    // const status: string = "d"
    let s: [number] = [67]
    return (
        status === "unauthenticated" ? (
            <Link href="/login"> <FaUser className="text-xl text-black" /></Link>
        ) : <></>
    );
}

export default HeaderProfile;