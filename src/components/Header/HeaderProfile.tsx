"use client";
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { TbLogout } from 'react-icons/tb';
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react';

const HeaderProfile = () => {
    const { data, status } = useSession();
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        status === "unauthenticated" ? (
            <Link href="/login"> <FaUserCircle className="text-xl text-black" /></Link>
        ) : (
            <div className="relative">
                <div className='cursor-pointer' onClick={() => setToggle((current) => !current)}>
                    {
                        data?.user?.image ? (
                            <Image src={data?.user?.image!} alt="profile" width={25} height={25} className='rounded-full' />
                        ) : <div className='text-zinc-100 bg-green-700 w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                            {data?.user?.email?.at(0)?.toUpperCase()}
                        </div>
                    }
                </div>

                {toggle && (
                    <div className="absolute top-[110%] right-0">
                        <button onClick={() => signOut({ callbackUrl: '/login' })} type='button' className=' flex items-center gap-3 bg-secondary text-primary p-2 rounded-md'>
                            <TbLogout className="text-2xl" /> Logout
                        </button>
                    </div>
                )}
            </div>

        )
    );
}

export default HeaderProfile;