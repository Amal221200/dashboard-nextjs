"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useCallback, useState } from "react";
import toast from "react-hot-toast/headless";

interface FormProps {
    title: string,
    subtitle: string,
    disable?: boolean,
}

const Form: React.FC<FormProps> = ({ title, subtitle }) => {
    const [disable, setDisable] = useState<boolean>(false)
    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        setDisable(true);
        // const res = await signIn('credentials', {
        //     email: formData.get('email'),
        //     password: formData.get('password')
        // })
        // if (res?.ok) {
        //     console.log()
        // }
        toast.success('Signed in succesfully')
        console.log('first')
        setDisable(false);
    }, [setDisable])
    return (
        <div className="w-full flex lg:justify-center justify-end items-center h-full p-6">
            <div className="lg:w-[400px] w-[350px] md:block hidden">
                <h2 className="text-left w-full font-bold 2xl:text-4xl text-2xl">{title}</h2>
                <p className="text-base font-medium">{subtitle}</p>
                <div className="flex gap-4 my-10">
                    <button type="button" className="flex-1 bg-white rounded-lg px-4 text-[#858585] py-2 transition-colors hover:bg-[#858585] hover:text-slate-100">Google</button>
                    <button type="button" className="flex-1 bg-white rounded-lg px-4 text-[#858585] py-2 transition-colors hover:bg-[#858585] hover:text-slate-100">Apple</button>
                </div>
                <form className="w-full flex flex-col gap-5 bg-white rounded-2xl p-10" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label htmlFor="">Email</label><br />
                        <input type="text" name="email" placeholder="Enter your email" autoComplete="email" className="w-full px-4 py-2 bg-[#f5f5f5] rounded-md outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Password</label><br />
                        <input type="password" name="password" placeholder="Enter your password" autoComplete="current-password" className="w-full px-4 py-2 bg-[#f5f5f5] rounded-md outline-none" />
                    </div>
                    <a href="#" className="">Forgot password?</a>
                    <button type="submit" className="w-full px-4 py-2 text-center rounded-md secondary-bg transition-colors text-white hover:bg-[#426cb1]" disabled={disable}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form