"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import useProfilModal from "../../hooks/useProfileModal";
import { user } from "../../lib/types";

const ProfileModal = () => {

    const [display, setDisplay] = useState<1 | 2>(1);

    const { user, setUser } = useUser()
    const [data, setData] = useState<user>(user!);
    const profileModal = useProfilModal()
    const handleInput = (event: React.FormEvent<HTMLInputElement>, type: 'basic' | 'socialLinks') => {
        setData((current) => ({ ...current, [type]: { ...current[type], [event.target.name]: event.target.value } }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setUser(data)
        setDisplay(1)
        profileModal.onClose()
    }

    return (
        <div className={`${profileModal.isOpen ? 'flex' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 w-full h-full justify-center items-center bg-black/50 z-10`}>
            <div className="sm:w-fit w-full bg-primary mx-4 rounded-xl">
                <header className="flex justify-between p-3">
                    <h1>Add New Profile</h1>
                    <button type="button" onClick={() => { profileModal.onClose() }}>
                        <FaTimes className="text-zinc-500" />
                    </button>
                </header>
                <hr />
                <form className="sm:w-[500px] w-full p-2 py-5 h-fit" onSubmit={handleSubmit}>
                    <div className={`${display == 1 ? "block" : 'hidden'} sm:w-[400px] px-2 w-full mx-auto`}>
                        <h2 className="mb-5">Basic | Contacts</h2>
                        <div className="p-1 w-full">
                            <label htmlFor="name">Enter Name*</label> <br />
                            <input type="text" id="name" name="name" onInput={(event) => handleInput(event, 'basic')} className="w-full border rounded mx-auto p-2" placeholder="Eg:- John Doe" value={data?.basic.name} required />
                        </div>
                        <div className="p-1 w-full">
                            <label htmlFor="email">Enter Email*</label> <br />
                            <input type="email" id="email" name="email" onInput={(event) => handleInput(event, 'basic')} className="w-full border rounded mx-auto p-2" placeholder="Eg:- johndoe@gmail.com" value={data?.basic.email} required />
                        </div>
                        <div className="p-1 w-full">
                            <label htmlFor="phone">Enter Phone*</label> <br />
                            <input type="number" id="phone" name="phone" onInput={(event) => handleInput(event, 'basic')} min={1_000_000_000} max={9_999_999_999} className="w-full border rounded mx-auto p-2" value={data?.basic.phone} placeholder="Eg:- John Doe" required />
                        </div>
                        <footer className="flex justify-end mt-4">
                            <button type="button" className="bg-primary rounded-md border border-black font-bold px-3 py-1" onClick={() => setDisplay(2)}>Next</button>
                        </footer>
                    </div>
                    <div className={`${display == 2 ? "block" : 'hidden'} sm:w-[400px] w-full mx-auto p-2`}>
                        <h2 className="mb-5">Basic | Socials</h2>
                        <div className="p-2 w-full">
                            <label htmlFor="instagram">Instagram Link (Optional)</label><br />
                            <input type="text" id="instagram" name="instagram" onInput={(event) => handleInput(event, 'socialLinks')} className="w-full border rounded mx-auto p-2" value={data?.socialLinks.instagram} placeholder="Eg:- instagram.com/username" />
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="youtube">Youtube Link (Optional)</label><br />
                            <input type="text" id="youtube" name="youtube" onInput={(event) => handleInput(event, 'socialLinks')} className="w-full border rounded mx-auto p-2" value={data?.socialLinks.youtube} placeholder="Eg:- youtube/username" />
                        </div>
                        <footer className="flex justify-end gap-4 mt-4">
                            <button type="button" className="bg-primary rounded-md border border-black font-bold px-3 py-1" onClick={() => setDisplay(1)}>Back</button>
                            <button type="submit" className="bg-secondary rounded-md text-primary px-3 py-1">Done</button>
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileModal;