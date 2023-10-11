import Link from "next/link";
import { sideBarLinks } from "../lib/constants";

const SideBar = () => {
    return (
        <aside className="flex-1 shrink-0 text-white bg-sidebar_gradient rounded-2xl lg:p-8 lg:px-12 p-6 h-[96%] sm:block hidden">
            <div className=" flex flex-col h-full">
                <h3 className="2xl:text-4xl text-2xl flex-1">Board.</h3>
                <nav className="flex flex-col md:gap-4 gap-2 flex-grow-[3] items-start">
                    {
                        sideBarLinks.map((sideBarLink, ind) => (
                            <Link href="/" key={ind} className={`${ind == 0 ? 'text-white' : 'text-gray-300'} md:text-base text-sm flex justify-start items-center gap-3 hover:text-white`}>
                                <sideBarLink.Icon /> {sideBarLink.title}
                            </Link>
                        ))
                    }
                </nav>

                <footer className="flex flex-col gap-2 flex-1">
                    <Link href="/" className="text-white">Help</Link>
                    <Link href="/" className="text-white">Contact Us</Link>
                </footer>
            </div>
        </aside>
    );
}

export default SideBar;