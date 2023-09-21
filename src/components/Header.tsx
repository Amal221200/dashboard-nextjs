import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import ToggleMenu from "./ToggleMenu"

const Header = () => {
  return (
    <header className="flex justify-between px-4 mb-5 items-center">
      <div className="flex items-center gap-4">
        <ToggleMenu />
        <h3 className="text-xl">Dashboard</h3>
      </div>
      <div className="flex gap-3 items-center">
        <form className="relative flex items-center bg-white p-2 rounded-md">
          <input type="search" placeholder="Search..." className="outline-none text-black placeholder:text-gray-400 sm:px-2 sm:block hidden" />
          <AiOutlineSearch className="text-lg text-gray-400" />
        </form>
        <AiOutlineBell className="text-xl" />
        <div>
          <FaUserCircle className="text-xl" />
        </div>
      </div>
    </header>
  )
}
export default Header