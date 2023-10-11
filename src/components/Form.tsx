"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";
import toast from "react-hot-toast";

interface FormProps {
    title: string,
    subtitle: string,
    disable?: boolean,
}

const Form: React.FC<FormProps> = ({ title, subtitle }) => {
    const [disable, setDisable] = useState<boolean>(false)
    const router = useRouter()
    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            setDisable(true);
            const userData = { email: formData.get('email'), password: formData.get('password') }
            if (title === 'Sign In') {
                await signIn('credentials', { ...userData, callbackUrl: '/' })
                toast.success('Signed in succesfully');
            } else {
                const response = await fetch(`/api/register`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })

                if (response?.status === 409) {
                    return toast.error("Email already exists")
                }
                
                toast.success('Created an acount!');
                router.push("/")
            }
        } catch (error: any) {
            console.log(error);
            if (error?.response?.status === 409) {
                return toast.error("Email already exists")
            }
        } finally {
            setDisable(false);
        }

    }, [setDisable, title, router])

    return (
        <div className="flex lg:justify-center justify-end items-center p-6 bg-primary rounded-lg">
            <div className="lg:w-[400px] max-w-[350px] md:block">
                <h2 className="text-left w-full font-bold 2xl:text-4xl text-2xl">{title}</h2>
                <p className="text-base font-medium">{subtitle}</p>
                <div className="flex gap-4 my-10">
                    <button type="button" className="flex-1 bg-white rounded-lg px-4 text-[#858585] py-2 transition-colors hover:bg-[#858585] hover:text-slate-100" onClick={async () => {
                        await signIn('google', {
                            callbackUrl: '/'
                        })
                    }}>Google</button>
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
                    <button type="submit" className="w-full px-4 py-2 text-center rounded-md bg-secondary transition-colors text-white hover:bg-[#426cb1] disabled:cursor-not-allowed" disabled={disable}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form