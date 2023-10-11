"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { sideBarLinks } from "@/lib/constants";
import useToggleMenu from "@/hooks/useToggleMenu";
import { useCallback } from "react";
import Link from "next/link";

const ToggleMenu = () => {
    const toggleMenu = useToggleMenu();
    const hanndleToggle = useCallback(() => {
        if (toggleMenu.isOpen) {
            toggleMenu.onClose()
        } else {
            toggleMenu.onOpen()
        }
    }, [toggleMenu])

    return (
        <div className={`relative sm:hidden block`} onClick={hanndleToggle}>
            <FaBarsStaggered className={`text-xl cursor-pointer ${toggleMenu.isOpen ? 'text-secondary' : 'text-black'}`} />
            {
                toggleMenu.isOpen &&
                (
                    <section className={`absolute top-[125%] -left-3 text-white p-4 bg-sidebar_gradient rounded-2xl sm:hidden block`}>
                        <nav className="flex flex-col md:gap-4 gap-2 flex-grow-[3] items-start">
                            {
                                sideBarLinks.map((sideBarLink, ind) => (
                                    <Link href="/" key={ind} className={`${ind == 0 ? 'text-white' : 'text-gray-300'} md:text-base text-sm flex justify-start items-center gap-3 hover:text-white`}>
                                        <sideBarLink.Icon /> {sideBarLink.title}
                                    </Link>
                                ))
                            }
                        </nav>

                        <footer className="flex flex-col gap-[5px] flex-1 mt-7">
                            <Link href="/" className="text-white text-sm">Help</Link>
                            <Link href="/" className="text-white text-sm">Contact Us</Link>
                        </footer>
                    </section>
                )
            }
        </div>
    )
}
export default ToggleMenu