"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa'
const HeaderProfile = () => {
    const { data, status } = useSession()
    // console.log(data, status);
    // console.log(data?.user?.image);
    // const status: string = "d"
    let s: [number] = [67]
    return (
        status === "unauthenticated" ? (
            <Link href="/login"> <FaUserCircle className="text-xl text-black" /></Link>
        ) : (
            data?.user?.image ? (
                <Image src={data?.user?.image!} alt="profile" width={20} height={20} className='rounded-full' />
            ) : <></>

        )
    );
}

export default HeaderProfile;