"use client";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePlus, AiOutlineYoutube } from "react-icons/ai"
import CardWrapper from "../CardWrapper"
import useProfilModal from "../../hooks/useProfileModal"
import { useCallback } from "react"
import useUser from "../../hooks/useUser"
import { BsWhatsapp } from "react-icons/bs"
import { toSnakeCase } from "../../lib/constants"

const BottomRight = () => {
  const profileModal = useProfilModal();

  const { user } = useUser();

  const handleClick = useCallback(() => {
    profileModal.onOpen()
  }, [profileModal]);
  // console.log("BOTTOM", user);

  return (
    <CardWrapper additionalClassNames="flex-1 flex justify-center items-center">
      {user?.basic.name && user.basic.email && user.basic.phone ?
        (
          <div className="h-full w-full" onClick={handleClick}>
            <h4 className="my-9 font-bold">{user.basic.name}</h4>
            <div className="flex justify-start items-end gap-5 flex-1">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-emerald-300/20">
                    <BsWhatsapp className="text-emerald-500 text-lg" />
                  </div> <span className="font-medium underline break-words max-w-xs">{`+91 ${user.basic.phone.slice(0, 5)} ${user.basic.phone.slice(5)}`}</span>
                </p>
                <p className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-300/20">
                    <AiOutlineMail className="text-purple-500 text-lg" />
                  </div> <span className="font-medium underline break-words max-w-xs">{user.basic.email}</span></p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-3"><div className="p-2 rounded-full bg-pink-300/20">
                  <AiOutlineInstagram className="text-pink-500 text-lg" />
                </div> <span className="font-medium underline">{user.socialLinks.instagram ? <a href={user.socialLinks.instagram} onClick={(e) => e.stopPropagation()} target="_blank">{toSnakeCase(user.basic.name.toLowerCase())}</a> : 'Not Set'}</span></p>
                <p className="flex items-center gap-3"><div className="p-2 rounded-full bg-rose-300/20">
                  <AiOutlineYoutube className="text-rose-500 text-lg" />
                </div> <span className="font-medium underline">{user.socialLinks.youtube ? <a href={user.socialLinks.youtube} onClick={(e) => e.stopPropagation()} target="_blank">{toSnakeCase(user.basic.name.toLowerCase())}</a> : 'Not Set'}</span></p>
              </div>
            </div>
          </div>
        ) :
        <div className="flex flex-col items-center" onClick={handleClick}>
          <button className="bg-[#eaeaea] p-4 rounded-full">
            <AiOutlinePlus className="text-xl text-gray-500" />
          </button>
          <p>Add Profile</p>
        </div>
      }
    </CardWrapper>
  )
}
export default BottomRight;