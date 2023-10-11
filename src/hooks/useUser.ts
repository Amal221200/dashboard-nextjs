import { create } from "zustand";
import { user } from "../lib/types";

interface useUserProps {
    user: user | null,
    setUser: (user: user) => void
}

const useUser = create<useUserProps>((set) => ({
    user: {
        basic: {
            name: "",
            email: "",
            phone: "",
        },
        socialLinks: {
            instagram: "",
            youtube: ""
        }
    },
    setUser(user) {
        set({ user })
    },
}))

export default useUser