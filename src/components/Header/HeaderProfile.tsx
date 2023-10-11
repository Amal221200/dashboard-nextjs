"use client";
import { useSession } from 'next-auth/react';
const HeaderProfile = () => {
    const { data, status } = useSession()
    // console.log(data);
    console.log(data?.user, status);
    
    return (<></>);
}

export default HeaderProfile;